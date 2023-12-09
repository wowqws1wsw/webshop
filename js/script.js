//toggle class active
const navbarNav = document.querySelector
('.navbar-nav,navbar-extra ')
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.className.toggle('active');
};
