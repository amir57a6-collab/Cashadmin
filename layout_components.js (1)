// _layout_components.js

// This function creates the header at the top of the page.
const createHeader = (title, showBackArrow = false) => {
    const headerHTML = `
        <header class="header">
            ${showBackArrow ? `<a href="javascript:history.back()" class="icon back-arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:24px;height:24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></a>` : `<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:24px;height:24px;"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg></div>`}
            <h1>${title}</h1>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
};

// This function creates the navigation bar at the bottom of the page.
const createBottomNav = (activePage) => {
    const navHTML = `
        <nav class="bottom-nav">
            <a href="tasks.html" class="nav-item ${activePage === 'tasks' ? 'active' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                <span>Tasks</span>
            </a>
            <a href="wallet.html" class="nav-item ${activePage === 'wallet' ? 'active' : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m15.75-3.375l-4.32-4.32a4.5 4.5 0 00-6.364 0l-4.32 4.32a2.25 2.25 0 000 3.182l4.32 4.32a4.5 4.5 0 006.364 0l4.32-4.32a2.25 2.25 0 000-3.182z" /></svg>
                <span>Wallet</span>
            </a>
            <a href="referral.html" class="nav-item ${activePage === 'referral' ? 'active' : ''}">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3.75 3.75 0 0112 15v-2.25L8.625 15v-2.25A3.75 3.75 0 0112 10.5h.008v.008H12v-.008z" /></svg>
                <span>Profile</span>
            </a>
        </nav>
    `;
    document.body.insertAdjacentHTML('beforeend', navHTML);
};

// Make these functions available for other files to import.
export { createHeader, createBottomNav };