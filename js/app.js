const btnToggleMenu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

btnToggleMenu.addEventListener('click', () => {
    btnToggleMenu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// remove menu at scroll down
window.addEventListener('scroll', () => {
    btnToggleMenu.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Scroll reveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true,
});

sr.reveal('.text',{delay: 70,origin: 'left'});
sr.reveal('.form-container form',{delay: 70,origin: 'right'});
sr.reveal('.heading',{delay: 200,origin: 'top'});
sr.reveal('.ride-content',{delay: 200,origin: 'top'});
sr.reveal('.about-content',{delay: 200,origin: 'top'});
sr.reveal('.services-content .box',{delay: 200,origin: 'top'});
