
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
