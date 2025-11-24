// ============================================
// INICIALIZACIÓN DE LIBRERÍAS MODERNAS
// ============================================

// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 100,
});

// Configuración de Particles.js para fondo minimalista B&W
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#000000'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.05,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.2
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Configurar ScrollTrigger
ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
    scroller: "body"
});

// ============================================
// ANIMACIONES GSAP
// ============================================

// Animación del título principal
gsap.from('.title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.3
});

// Animación de los botones CTA
gsap.from('.cta-button', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.8
});

// Parallax effect para secciones
gsap.utils.toArray('section').forEach((section, i) => {
    if (i > 0) {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            },
            y: 100,
            opacity: 0.3
        });
    }
});

// Animación de las tarjetas de proyecto con efecto stagger
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 70%',
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
});

// Vanilla Tilt para efecto 3D en tarjetas de proyecto
document.addEventListener('DOMContentLoaded', function() {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.02
    });
});

// Intersection Observer para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.reveal-item, .reveal-text');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scrolling mejorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    // Parallax effect para hero
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (heroContent) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Loading animation
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 1000);
    }
    const slider = document.querySelector('.testimonial-slider');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-control.prev');
    const nextBtn = document.querySelector('.testimonial-control.next');
    
    let currentSlide = 0;
    const slideCount = document.querySelectorAll('.testimonial-card').length;
    
    function goToSlide(index) {
        if (window.innerWidth < 768) {
            slider.style.transform = `translateX(-${index * 100}%)`;
            currentSlide = index;
            
            // Actualizar dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    });
    
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    });
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
    });
    
    // Responsive behavior
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            slider.style.transform = 'translateX(0)';
        } else {
            goToSlide(currentSlide);
        }
    });
});



// Loader
window.addEventListener('load', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loaderWrapper.classList.add('hidden');
    }, 1000);
});

// Cursor personalizado
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '0px';
            cursor.style.height = '0px';
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
            cursorFollower.style.borderColor = 'var(--secondary-color)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
            cursorFollower.style.borderColor = 'var(--primary-color)';
        });
    });
});

// Navegación
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Cambiar estilo de navbar al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Menú móvil
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.querySelector('.bar:nth-child(1)').style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            mobileMenu.querySelector('.bar:nth-child(2)').style.opacity = '0';
            mobileMenu.querySelector('.bar:nth-child(3)').style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            mobileMenu.querySelector('.bar:nth-child(1)').style.transform = 'none';
            mobileMenu.querySelector('.bar:nth-child(2)').style.opacity = '1';
            mobileMenu.querySelector('.bar:nth-child(3)').style.transform = 'none';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenu.querySelector('.bar:nth-child(1)').style.transform = 'none';
            mobileMenu.querySelector('.bar:nth-child(2)').style.opacity = '1';
            mobileMenu.querySelector('.bar:nth-child(3)').style.transform = 'none';
        });
    });
    
    // Activar enlace según la sección visible
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal-item');
    
    function reveal() {
        revealItems.forEach(item => {
            const windowHeight = window.innerHeight;
            const elementTop = item.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    reveal(); // Para elementos visibles al cargar la página
    
    // Animación de barras de habilidades
    const skillBars = document.querySelectorAll('.skill-per');
    
    function animateSkills() {
        skillBars.forEach(skill => {
            const windowHeight = window.innerHeight;
            const elementTop = skill.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                const percentage = skill.getAttribute('per');
                skill.style.width = percentage + '%';
            }
        });
    }
    
    window.addEventListener('scroll', animateSkills);
});

// Botón volver arriba
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('#backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});





// Animación de texto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.title');
    if (typedText) {
        const text = typedText.textContent;
        typedText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typedText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Comentado para no interferir con la animación reveal-text
       setTimeout(typeWriter, 1500);
    }
});

// ============================================
// MODAL PARA PROYECTOS PRIVADOS
// ============================================

const modal = document.getElementById('privateProjectModal');
const modalClose = document.querySelector('.modal-close');
const privateProjectButtons = document.querySelectorAll('.private-project');

// Abrir modal cuando se hace click en proyecto privado
privateProjectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    });
});

// Cerrar modal con el botón X
if (modalClose) {
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}

// Cerrar modal al hacer click fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});
