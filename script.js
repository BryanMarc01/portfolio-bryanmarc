/* ═══════════════════════════════════════════════════════════
   Bryan Marc — comportamiento de la página
   ═══════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Barra superior: fondo al bajar ─────────────────────── */
    var nav = document.getElementById('nav');
    var waFloat = document.querySelector('.wa-float');

    function onScroll() {
        var y = window.scrollY;
        nav.classList.toggle('stuck', y > 40);
        if (waFloat) waFloat.classList.toggle('on', y > 700);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ── Menú en móvil ──────────────────────────────────────── */
    var burger = document.getElementById('navBurger');
    var links = document.getElementById('navLinks');

    function closeMenu() {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
    }

    burger.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    /* ── Titular rotativo ───────────────────────────────────── */
    var rotator = document.getElementById('rotator');

    if (rotator && !reduce) {
        var items = rotator.querySelectorAll('.rot');
        var idx = 0;

        setInterval(function () {
            var current = items[idx];
            idx = (idx + 1) % items.length;
            var next = items[idx];

            current.classList.add('out');
            current.classList.remove('on');

            setTimeout(function () { current.classList.remove('out'); }, 500);
            next.classList.add('on');
        }, 3600);
    }

    /* ── Aparición de secciones al hacer scroll ─────────────── */
    var revealSelector = [
        '.sec-head', '.pain', '.svc', '.step', '.work',
        '.about-copy', '.about-card', '.testi', '.contact-copy',
        '.contact-form', '.hero-proof', '.svc-foot', '.more'
    ].join(',');

    var targets = Array.prototype.slice.call(document.querySelectorAll(revealSelector));

    if (reduce || !('IntersectionObserver' in window)) {
        targets.forEach(function (el) { el.classList.add('rise', 'seen'); });
    } else {
        targets.forEach(function (el, i) {
            el.classList.add('rise');
            el.style.transitionDelay = (i % 4) * 70 + 'ms';
        });

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('seen');
                io.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

        targets.forEach(function (el) { io.observe(el); });
    }

    /* ── Formulario de contacto ─────────────────────────────── */
    var form = document.getElementById('contactForm');
    var errBox = document.getElementById('formError');
    var okBox = document.getElementById('formOk');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('fName').value.trim();
        var mail = document.getElementById('fMail').value.trim();
        var msg = document.getElementById('fMsg').value.trim();

        if (!name || !mail || !msg) {
            errBox.hidden = false;
            return;
        }
        errBox.hidden = true;

        var subject = 'Proyecto de ' + name;
        var body = msg + '\n\n—\n' + name + '\n' + mail;

        window.location.href = 'mailto:bmarcenlinea@gmail.com'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);

        okBox.hidden = false;
    });

    /* ── Idioma: español / inglés ───────────────────────────── */
    var langBtn = document.getElementById('langToggle');

    function applyLang(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-en]').forEach(function (el) {
            if (el.dataset.es === undefined) el.dataset.es = el.innerHTML;
            el.innerHTML = (lang === 'en') ? el.dataset.en : el.dataset.es;
        });

        document.querySelectorAll('[data-en-href]').forEach(function (el) {
            if (el.dataset.esHref === undefined) el.dataset.esHref = el.getAttribute('href');
            el.setAttribute('href', (lang === 'en') ? el.dataset.enHref : el.dataset.esHref);
        });

        document.querySelectorAll('[data-en-ph]').forEach(function (el) {
            if (el.dataset.esPh === undefined) el.dataset.esPh = el.placeholder;
            el.placeholder = (lang === 'en') ? el.dataset.enPh : el.dataset.esPh;
        });

        // El botón anuncia el idioma al que se cambia, con su bandera
        var toEnglish = (lang !== 'en');
        document.getElementById('langCode').textContent = toEnglish ? 'EN' : 'ES';
        langBtn.querySelector('.flag-en').hidden = !toEnglish;
        langBtn.querySelector('.flag-es').hidden = toEnglish;
        langBtn.setAttribute('aria-label', toEnglish ? 'Ver la página en inglés' : 'Ver la página en español');

        try { localStorage.setItem('lang', lang); } catch (err) { /* modo privado */ }
    }

    var saved;
    try { saved = localStorage.getItem('lang'); } catch (err) { saved = null; }
    if (saved === 'en') applyLang('en');

    langBtn.addEventListener('click', function () {
        applyLang(document.documentElement.lang === 'en' ? 'es' : 'en');
    });
})();
