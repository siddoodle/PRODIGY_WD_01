// script.js
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#444';
        } else {
            navbar.style.backgroundColor = '#333';
        }

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-item a[href="#${id}"]`);

            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                link.style.backgroundColor = '#666';
                link.style.color = '#fff';
            } else {
                link.style.backgroundColor = '';
                link.style.color = '';
            }
        });
    });

    navItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.backgroundColor = '#666';
            item.style.color = '#fff';
        });

        item.addEventListener('mouseout', function () {
            item.style.backgroundColor = '';
            item.style.color = '';
        });
    });
});
