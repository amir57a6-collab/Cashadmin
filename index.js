const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.processWithdrawal = functions.https.onCall(async (data, context) => {
    const adminEmail = "amir57a6@gmail.com";
    if (!context.auth || context.auth.token.email !== adminEmail) {
        throw new functions.https.HttpsError("permission-denied", "Admin access required.");
    }

    const { withdrawalId, newStatus, userId, amount } = data;
    if (!withdrawalId || !newStatus || !userId || amount == null) {
        throw new functions.https.HttpsError("invalid-argument", "Missing required data.");
    }

    const withdrawalRef = db.collection("withdrawals").doc(withdrawalId);
    return db.runTransaction(async (transaction) => {
        const withdrawalDoc = await transaction.get(withdrawalRef);
        if (!withdrawalDoc.exists || withdrawalDoc.data().status !== 'pending') {
            throw new Error("Withdrawal is already processed or does not exist.");
        }
        transaction.update(withdrawalRef, { status: newStatus });
        if (newStatus === 'approved') {
            const userRef = db.collection("users").doc(userId);
            transaction.update(userRef, {
                balance: admin.firestore.FieldValue.increment(-amount),
            });
            const transactionRef = db.collection("transactions").doc();
            transaction.set(transactionRef, {
                userId: userId, amount: -amount,
                description: `Withdrawal (${withdrawalDoc.data().method})`,
                type: "withdrawal", timestamp: admin.firestore.FieldValue.serverTimestamp()
            });
        }
        return { message: `Withdrawal successfully marked as ${newStatus}.` };
    });
});