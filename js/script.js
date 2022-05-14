function openTab(event) {
    const tabName = event.currentTarget.getAttribute('name');
    const tabs = document.querySelectorAll('.tabs__block');
    const requestedTab = document.querySelector(`.tabs__block[name="${tabName}"]`)
    tabs.forEach((tabBlockElement) => tabBlockElement.classList.remove('active'));
    requestedTab.classList.add('active');
}
document.querySelectorAll('.tabs__item span').forEach((item) => { item.addEventListener('click', openTab);});
