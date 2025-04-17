const hamburguesa = document.getElementById('hamburger');
const enlaces = document.querySelector('.nav-links');

hamburguesa.addEventListener('click', () => {
    enlaces.classList.toggle('show');
});

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;

