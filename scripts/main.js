document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Website Loaded');

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const logoContainer = document.querySelector('.logo-container');

    logoContainer.addEventListener('mouseover', () => {
        logoContainer.style.animation = 'popIn 0.5s ease-in-out';
    });

    logoContainer.addEventListener('mouseleave', () => {
        logoContainer.style.animation = 'popOut 0.5s ease-in-out';
    });
});