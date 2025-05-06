// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.menu');

    // abre/fecha menu mobile
    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
});
