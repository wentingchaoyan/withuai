/**
 * With U - Main JavaScript
 * Handles navigation, animations, and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // Mobile Menu Toggle
    // ============================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('.site-header');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');

            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mobileMenuToggle &&
            !event.target.closest('.mobile-menu-toggle') &&
            !event.target.closest('.main-nav') &&
            mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // ============================================
    // Header Scroll Effect
    // ============================================
    let lastScroll = 0;
    const scrollThreshold = 50;

    function handleScroll() {
        const currentScroll = window.pageYOffset;

        if (header) {
            // Add shadow when scrolled
            if (currentScroll > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        lastScroll = currentScroll;
    }

    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = header ? header.offsetHeight : 0;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Intersection Observer for Animations
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optionally unobserve after animation
                // animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.service-card, .feature-item, .news-card, .value-card').forEach(el => {
        animateOnScroll.observe(el);
    });

    // ============================================
    // Button Ripple Effect
    // ============================================
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                transform: translate(-50%, -50%);
                pointer-events: none;
                animation: ripple 0.6s ease-out forwards;
                left: ${x}px;
                top: ${y}px;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation keyframes
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // Parallax Effect for Hero Sections
    // ============================================
    const heroSections = document.querySelectorAll('.hero, .page-hero, .story-hero, .services-hero');

    if (heroSections.length > 0 && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            heroSections.forEach(hero => {
                const speed = 0.3;
                const yPos = scrolled * speed;
                hero.style.backgroundPositionY = `${yPos}px`;
            });
        });
    }

    // ============================================
    // Image Lazy Loading Enhancement
    // ============================================
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading supported
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for older browsers
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // Accessibility: Focus Management
    // ============================================
    // Add visible focus styles when using keyboard
    document.body.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.body.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Add focus styles
    if (!document.querySelector('#focus-styles')) {
        const focusStyle = document.createElement('style');
        focusStyle.id = 'focus-styles';
        focusStyle.textContent = `
            body.keyboard-nav *:focus {
                outline: 2px solid var(--brand-orange, #FF511B);
                outline-offset: 2px;
            }
            body:not(.keyboard-nav) *:focus {
                outline: none;
            }
        `;
        document.head.appendChild(focusStyle);
    }

    // ============================================
    // Console Welcome Message
    // ============================================
    console.log(
        '%c With U %c A platform for child development support',
        'background: linear-gradient(135deg, #FF511B, #D7C862); color: white; padding: 8px 16px; border-radius: 4px 0 0 4px; font-weight: bold;',
        'background: #2D3142; color: #FAF9F7; padding: 8px 16px; border-radius: 0 4px 4px 0;'
    );
});
