<<<<<<< HEAD
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
=======
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
>>>>>>> d4a3ae9713692e3765672ad04fb5c23e1f43addf
});