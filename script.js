let animationModulePromise;
let sectionObserver;
const animationInitializers = new Map();

function getAnimationModule() {
    if (!animationModulePromise) {
        animationModulePromise = import('./animations.js');
    }
    return animationModulePromise;
}

function registerSectionAnimation(section, initializer) {
    if (!section || typeof initializer !== 'function') {
        return;
    }

    if (!sectionObserver) {
        sectionObserver = new IntersectionObserver(async (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                sectionObserver.unobserve(entry.target);
                const init = animationInitializers.get(entry.target);
                animationInitializers.delete(entry.target);
                if (!init) continue;
                const module = await getAnimationModule();
                init(module, entry.target);
            }
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -15% 0px'
        });
    }

    animationInitializers.set(section, initializer);
    sectionObserver.observe(section);
}

async function initHeroAnimations(module) {
    const { getGlobalTimeline, animateFromTo } = module;
    const globalTimeline = getGlobalTimeline({ duration: 700 });
    globalTimeline
        .clear()
        .fromTo('.hero .title', { opacity: 0, y: 48 }, { opacity: 1, y: 0 })
        .fromTo('.hero .subtitle', { opacity: 0, y: 32 }, { opacity: 1, y: 0 }, { parallel: true, stagger: 120 })
        .fromTo('.hero .cta-button', { opacity: 0, y: 32 }, { opacity: 1, y: 0 }, { parallel: true, stagger: 120 })
        .fromTo('.hero .hero-image', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 });
    await globalTimeline.play();

    animateFromTo('.scroll-indicator .wheel', { y: 0 }, { y: 16 }, {
        duration: 1000,
        easing: 'ease-in-out',
        direction: 'alternate',
        iterations: Infinity
    });
}

function initProjectAnimations(module) {
    const { animateOnScroll, animateFromTo } = module;

    animateOnScroll({
        targets: '#projects .section-header > *',
        from: { opacity: 0, y: 32 },
        to: { opacity: 1, y: 0 },
        options: { duration: 500, stagger: 120 }
    });

    animateOnScroll({
        targets: '#projects .project-card',
        from: { opacity: 0, y: 46 },
        to: { opacity: 1, y: 0 },
        options: { duration: 600, stagger: 140 }
    });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
        const image = card.querySelector('.project-image img');
        const overlay = card.querySelector('.project-overlay');
        const links = card.querySelectorAll('.project-link');

        if (overlay) {
            overlay.style.pointerEvents = 'none';
        }

        const handleEnter = () => {
            if (image) {
                image.getAnimations().forEach((animation) => animation.cancel());
                animateFromTo(image, { scale: 1 }, { scale: 1.05 }, { duration: 280, easing: 'ease-out' });
            }

            if (overlay) {
                overlay.style.pointerEvents = 'auto';
                overlay.getAnimations().forEach((animation) => animation.cancel());
                animateFromTo(overlay, { opacity: 0 }, { opacity: 1 }, { duration: 240 });
            }

            if (links.length) {
                links.forEach((link) => link.getAnimations().forEach((animation) => animation.cancel()));
                animateFromTo(links, { opacity: 0, y: 16 }, { opacity: 1, y: 0 }, { duration: 260, stagger: 70 });
            }
        };

        const handleLeave = () => {
            if (image) {
                image.getAnimations().forEach((animation) => animation.cancel());
                animateFromTo(image, { scale: 1.05 }, { scale: 1 }, { duration: 260, easing: 'ease-out' });
            }

            if (overlay) {
                overlay.getAnimations().forEach((animation) => animation.cancel());
                animateFromTo(overlay, { opacity: 1 }, { opacity: 0 }, { duration: 200 });
                overlay.style.pointerEvents = 'none';
            }

            if (links.length) {
                links.forEach((link) => link.getAnimations().forEach((animation) => animation.cancel()));
                animateFromTo(links, { opacity: 1, y: 0 }, { opacity: 0, y: 12 }, { duration: 200, stagger: 50 });
            }
        };

        card.addEventListener('mouseenter', handleEnter);
        card.addEventListener('mouseleave', handleLeave);
        card.addEventListener('focusin', handleEnter);
        card.addEventListener('focusout', (event) => {
            if (card.contains(event.relatedTarget)) return;
            handleLeave();
        });
    });
}

function initTestimonialsAnimations(module) {
    const { animateOnScroll } = module;
    animateOnScroll({
        targets: '#testimonials .section-header > *',
        from: { opacity: 0, y: 32 },
        to: { opacity: 1, y: 0 },
        options: { duration: 520, stagger: 120 }
    });

    animateOnScroll({
        targets: '#testimonials .testimonial-card',
        from: { opacity: 0, y: 42 },
        to: { opacity: 1, y: 0 },
        options: { duration: 540, stagger: 120 }
    });
}

function initAboutAnimations(module) {
    const { animateOnScroll } = module;

    animateOnScroll({
        targets: '#about .section-header > *',
        from: { opacity: 0, y: 32 },
        to: { opacity: 1, y: 0 },
        options: { duration: 520, stagger: 120 }
    });

    animateOnScroll({
        targets: '#about .about-image',
        from: { opacity: 0, x: -40 },
        to: { opacity: 1, x: 0 },
        options: { duration: 600 }
    });

    animateOnScroll({
        targets: '#about .about-content > *',
        from: { opacity: 0, y: 36 },
        to: { opacity: 1, y: 0 },
        options: { duration: 520, stagger: 100 }
    });

    const skillBars = document.querySelectorAll('.skill-per');
    skillBars.forEach((bar) => {
        const targetWidth = bar.getAttribute('per');
        if (!targetWidth) return;
        bar.style.width = '0%';
        animateOnScroll({
            targets: bar,
            from: { width: '0%' },
            to: () => ({ width: `${targetWidth}%` }),
            options: { duration: 900, easing: 'cubic-bezier(0.33, 1, 0.68, 1)' },
            observerOptions: { threshold: 0.4 }
        });
    });

}

function initContactAnimations(module) {
    const { animateOnScroll } = module;
    animateOnScroll({
        targets: '#contact .section-header > *',
        from: { opacity: 0, y: 32 },
        to: { opacity: 1, y: 0 },
        options: { duration: 520, stagger: 120 }
    });

    animateOnScroll({
        targets: '#contact .contact-wrapper',
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 },
        options: { duration: 580 }
    });

    animateOnScroll({
        targets: '#contact form .form-group',
        from: { opacity: 0, y: 28 },
        to: { opacity: 1, y: 0 },
        options: { duration: 420, stagger: 100 },
        observerOptions: { threshold: 0.3 }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        if (currentScroll > lastScrollY && currentScroll > 200) {
            if (navbar) navbar.style.transform = 'translateY(-100%)';
        } else {
            if (navbar) navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = currentScroll;

        const sections = document.querySelectorAll('section[id]');
        let activeId = '';
        sections.forEach((section) => {
            const offset = section.offsetTop - 200;
            if (currentScroll >= offset) {
                activeId = section.id;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href')?.replace('#', '') === activeId);
        });
    });

    mobileMenu?.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu?.classList.toggle('active');
        const bars = mobileMenu.querySelectorAll('.bar');
        if (mobileMenu.classList.contains('active')) {
            bars[0]?.style.setProperty('transform', 'rotate(-45deg) translate(-5px, 6px)');
            bars[1]?.style.setProperty('opacity', '0');
            bars[2]?.style.setProperty('transform', 'rotate(45deg) translate(-5px, -6px)');
        } else {
            bars.forEach((bar) => {
                bar.style.removeProperty('transform');
                bar.style.removeProperty('opacity');
            });
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            mobileMenu?.classList.remove('active');
            mobileMenu?.querySelectorAll('.bar').forEach((bar) => {
                bar.style.removeProperty('transform');
                bar.style.removeProperty('opacity');
            });
        });
    });
}

function initParallax() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * -0.2}px)`;
    });
}

function initLoader() {
    const loader = document.querySelector('.loader-wrapper');
    if (!loader) return;
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 800);
    });
}

function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (!cursor || !follower) return;

    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
        requestAnimationFrame(() => {
            follower.style.left = `${clientX}px`;
            follower.style.top = `${clientY}px`;
        });
    });

    document.addEventListener('mousedown', () => {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        follower.style.width = '40px';
        follower.style.height = '40px';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        follower.style.width = '30px';
        follower.style.height = '30px';
    });

    const interactables = document.querySelectorAll('a, button, .cta-button');
    interactables.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.style.width = '0px';
            cursor.style.height = '0px';
            follower.style.width = '50px';
            follower.style.height = '50px';
            follower.style.borderColor = 'var(--secondary-color)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            follower.style.width = '30px';
            follower.style.height = '30px';
            follower.style.borderColor = 'var(--primary-color)';
        });
    });
}

function initBackToTop() {
    const button = document.querySelector('#backToTop');
    if (!button) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initTypewriter() {
    const typedText = document.querySelector('.title');
    if (!typedText) return;
    const text = typedText.textContent;
    typedText.textContent = '';
    let index = 0;
    const type = () => {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index += 1;
            setTimeout(type, 100);
        }
    };
    setTimeout(type, 1500);
}

function initTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-control.prev');
    const nextBtn = document.querySelector('.testimonial-control.next');
    const cards = document.querySelectorAll('.testimonial-card');
    if (!slider || !prevBtn || !nextBtn || !cards.length) return;

    let currentIndex = 0;
    const totalSlides = cards.length;

    const goToSlide = (index) => {
        if (window.innerWidth < 768) {
            slider.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('active', dotIndex === index);
            });
        }
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            slider.style.transform = 'translateX(0)';
        } else {
            goToSlide(currentIndex);
        }
    });
}

function initAnimations() {
    registerSectionAnimation(document.querySelector('#hero'), initHeroAnimations);
    registerSectionAnimation(document.querySelector('#projects'), initProjectAnimations);
    registerSectionAnimation(document.querySelector('#testimonials'), initTestimonialsAnimations);
    registerSectionAnimation(document.querySelector('#about'), initAboutAnimations);
    registerSectionAnimation(document.querySelector('#contact'), initContactAnimations);
}

function initApp() {
    initLoader();
    initSmoothScroll();
    initNavbar();
    initParallax();
    initCursor();
    initBackToTop();
    initTypewriter();
    initTestimonialSlider();
    initAnimations();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
