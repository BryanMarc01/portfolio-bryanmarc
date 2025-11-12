const DEFAULT_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
const DEFAULT_DURATION = 600;

function resolveElements(targets) {
    if (!targets) {
        return [];
    }
    if (typeof targets === 'string') {
        return Array.from(document.querySelectorAll(targets));
    }
    if (targets instanceof Element) {
        return [targets];
    }
    if (NodeList.prototype.isPrototypeOf(targets) || Array.isArray(targets)) {
        return Array.from(targets);
    }
    return [];
}

function buildKeyframe(values = {}) {
    const frame = {};
    const transforms = [];

    if (values.opacity !== undefined) {
        frame.opacity = values.opacity;
    }

    if (values.x !== undefined) {
        transforms.push(`translateX(${values.x}px)`);
    }

    if (values.y !== undefined) {
        transforms.push(`translateY(${values.y}px)`);
    }

    if (values.scale !== undefined) {
        transforms.push(`scale(${values.scale})`);
    }

    if (values.rotate !== undefined) {
        transforms.push(`rotate(${values.rotate}deg)`);
    }

    if (values.skewX !== undefined) {
        transforms.push(`skewX(${values.skewX}deg)`);
    }

    if (values.skewY !== undefined) {
        transforms.push(`skewY(${values.skewY}deg)`);
    }

    if (transforms.length) {
        frame.transform = transforms.join(' ');
    }

    const otherKeys = ['filter', 'backgroundColor', 'color', 'width', 'height', 'borderColor'];
    otherKeys.forEach((key) => {
        if (values[key] !== undefined) {
            frame[key] = values[key];
        }
    });

    return frame;
}

function animateTargets(targets, keyframes, options = {}) {
    const elements = resolveElements(targets);
    if (!elements.length) {
        return Promise.resolve();
    }

    const {
        stagger = 0,
        delay = 0,
        fill = 'both',
        easing = DEFAULT_EASING,
        duration = DEFAULT_DURATION,
        ...animationOptions
    } = options;

    return new Promise((resolve) => {
        let finished = 0;
        const total = elements.length;

        elements.forEach((element, index) => {
            const localDelay = delay + index * stagger;
            const animation = element.animate(keyframes, {
                easing,
                duration,
                delay: localDelay,
                fill,
                ...animationOptions
            });

            const handleFinish = () => {
                finished += 1;
                if (finished === total) {
                    resolve();
                }
            };

            animation.addEventListener('finish', handleFinish, { once: true });
            animation.addEventListener('cancel', handleFinish, { once: true });
        });
    });
}

class Timeline {
    constructor(defaultOptions = {}) {
        this.defaultOptions = {
            duration: DEFAULT_DURATION,
            easing: DEFAULT_EASING,
            fill: 'both',
            stagger: 0,
            delay: 0,
            ...defaultOptions
        };
        this.groups = [];
    }

    setDefaults(defaultOptions = {}) {
        this.defaultOptions = {
            ...this.defaultOptions,
            ...defaultOptions
        };
        return this;
    }

    clear() {
        this.groups = [];
        return this;
    }

    add(targets, keyframes, options = {}) {
        const { parallel, ...restOptions } = options;
        const step = {
            targets,
            keyframes,
            options: {
                ...this.defaultOptions,
                ...restOptions
            }
        };

        if (parallel && this.groups.length) {
            this.groups[this.groups.length - 1].push(step);
        } else {
            this.groups.push([step]);
        }

        return this;
    }

    fromTo(targets, fromVars, toVars, options = {}) {
        const keyframes = [buildKeyframe(fromVars), buildKeyframe(toVars)];
        return this.add(targets, keyframes, options);
    }

    from(targets, fromVars, options = {}) {
        const keyframes = [buildKeyframe(fromVars), buildKeyframe({})];
        return this.add(targets, keyframes, options);
    }

    to(targets, toVars, options = {}) {
        const keyframes = [buildKeyframe({}), buildKeyframe(toVars)];
        return this.add(targets, keyframes, options);
    }

    async play() {
        for (const group of this.groups) {
            await Promise.all(
                group.map(({ targets, keyframes, options }) =>
                    animateTargets(targets, keyframes, options)
                )
            );
        }
        return this;
    }
}

let globalTimeline;

export function getGlobalTimeline(defaultOptions = {}) {
    if (!globalTimeline) {
        globalTimeline = new Timeline(defaultOptions);
    } else if (Object.keys(defaultOptions).length) {
        globalTimeline.setDefaults(defaultOptions);
    }
    return globalTimeline;
}

export function createTimeline(defaultOptions = {}) {
    return new Timeline(defaultOptions);
}

export function animateFromTo(targets, fromVars, toVars, options = {}) {
    const keyframes = [buildKeyframe(fromVars), buildKeyframe(toVars)];
    return animateTargets(targets, keyframes, options);
}

export function animateTo(targets, toVars, options = {}) {
    const keyframes = [buildKeyframe({}), buildKeyframe(toVars)];
    return animateTargets(targets, keyframes, options);
}

export function animateFrom(targets, fromVars, options = {}) {
    const keyframes = [buildKeyframe(fromVars), buildKeyframe({})];
    return animateTargets(targets, keyframes, options);
}

export function animateOnScroll({
    targets,
    from,
    to,
    options = {},
    observerOptions = {}
}) {
    const elements = resolveElements(targets);
    const {
        threshold = 0.2,
        rootMargin = '0px 0px -10% 0px'
    } = observerOptions;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                obs.unobserve(entry.target);
                const resolvedFrom = typeof from === 'function' ? from(entry.target) : from;
                const resolvedTo = typeof to === 'function' ? to(entry.target) : to;
                animateFromTo(entry.target, resolvedFrom, resolvedTo, options);
            }
        });
    }, { threshold, rootMargin });

    elements.forEach((element) => observer.observe(element));
    return observer;
}

export function registerHoverAnimation(element, {
    enter,
    leave,
    options = {}
}) {
    if (!element) {
        return () => {};
    }

    const handleEnter = () => {
        element.getAnimations().forEach((animation) => animation.cancel());
        animateFromTo(element, enter.from, enter.to, options);
    };

    const handleLeave = () => {
        element.getAnimations().forEach((animation) => animation.cancel());
        animateFromTo(element, leave.from, leave.to, options);
    };

    element.addEventListener('mouseenter', handleEnter);
    element.addEventListener('focus', handleEnter);
    element.addEventListener('mouseleave', handleLeave);
    element.addEventListener('blur', handleLeave);

    return () => {
        element.removeEventListener('mouseenter', handleEnter);
        element.removeEventListener('focus', handleEnter);
        element.removeEventListener('mouseleave', handleLeave);
        element.removeEventListener('blur', handleLeave);
    };
}

export function animateSequence(steps = [], defaultOptions = {}) {
    const timeline = new Timeline(defaultOptions);
    steps.forEach((step) => {
        if (!step) return;
        const { targets, from, to, options } = step;
        timeline.fromTo(targets, from, to, options);
    });
    return timeline.play();
}

export const AnimationUtils = {
    createTimeline,
    animateFromTo,
    animateFrom,
    animateTo,
    animateOnScroll,
    registerHoverAnimation,
    animateSequence,
    getGlobalTimeline
};

export default AnimationUtils;
