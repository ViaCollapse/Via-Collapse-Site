// Плавные переходы между страницами
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Добавление эффектов при скролле
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add('active');
        }
    });
});

// Добавление класса active к текущей ссылке
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = document.body.id; // Получаем ID текущей страницы
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href').replace('.html', ''); // Убираем .html из href
        if (href === currentPage) {
            link.classList.add('active'); // Добавляем класс active
        }
    });
});