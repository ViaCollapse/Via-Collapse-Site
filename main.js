<<<<<<< HEAD
// ������� �������� ����� ����������
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ���������� �������� ��� �������
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add('active');
        }
    });
=======
// ������� �������� ����� ����������
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ���������� �������� ��� �������
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add('active');
        }
    });
>>>>>>> d4a3ae9713692e3765672ad04fb5c23e1f43addf
});