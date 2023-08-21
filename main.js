//console.log('merahab')

const menuBtn = document.querySelector('.navbar-menu-btn')
//console.log(menuBtn)

const menuLinks = document.querySelector('.navbar-links')

//console.log(menuLinks)

menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('mobile-menu')
})