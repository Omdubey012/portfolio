document.addEventListener('DOMContentLoaded', () => {

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const targetPosition =
                    targetElement.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    
    const skillCards = document.querySelectorAll('.skill-card');

    const skillObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show-skill');
                }
            });
        },
        { threshold: 0.2 }
    );

    skillCards.forEach(card => {
        skillObserver.observe(card);
    });

    /* =========================
       Contact form handling
    ========================== */
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }

});