const openMenu = getElement('.legal-house--header-open-menu');
const closeMenu = getElement('.legal-house--header-close-menu');
const mainMenu = getElement('.legal-house--header-main-menu');
console.log(openMenu,closeMenu,mainMenu)

addListener(openMenu,'click', function() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    mainMenu.style.left = '0';
})

addListener(closeMenu,'click', function() {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    mainMenu.style.left = '-100%';
})

function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}