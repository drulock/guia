document.addEventListener('DOMContentLoaded', function() {

    // ======================= NAVEGACIÓN ACTIVA AL SCROLL =======================
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function changeNavOnScroll() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 75) { // 75 es un poco más que la altura del nav
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // ======================= ANIMACIÓN DE ELEMENTOS AL SCROLL =======================
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } 
            // Opcional: para que la animación se revierta al salir de la vista
            // else {
            //     hideScrollElement(el);
            // }
        });
    };
    
    // ======================= EFECTO PARALLAX =======================
    const parallaxSections = document.querySelectorAll('.parallax-section');

    function applyParallax() {
        parallaxSections.forEach(section => {
            const imageUrl = section.getAttribute('data-bg-image');
            if (imageUrl) {
                section.style.backgroundImage = `url(${imageUrl})`;
            }
        });
    }

    // ======================= EVENT LISTENERS =======================
    window.addEventListener('scroll', () => {
        changeNavOnScroll();
        handleScrollAnimation();
    });

    // Inicializar funciones
    applyParallax();
    handleScrollAnimation(); // Para elementos ya visibles en la carga
    changeNavOnScroll(); // Para estado inicial del nav
});