const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile_nav');
const mobile_header = document.querySelector('.header');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    mobile_header.classList.toggle('is-active');
})