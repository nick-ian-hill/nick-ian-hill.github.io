document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations using Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // Apply reveal class to sections
    document.querySelectorAll('.section, .card, .stat-card, .timeline-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Navigation scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        } else {
            header.style.padding = '0';
            header.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
        }
    });
});

// Add Reveal CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
    .section.reveal {
        transition-delay: 0.1s;
    }
    .card:nth-child(2) { transition-delay: 0.1s; }
    .card:nth-child(3) { transition-delay: 0.2s; }
`;
document.head.appendChild(style);
