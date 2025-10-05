// Publication card animations
function animatePublications() {
    const publications = document.querySelectorAll('.publication-card');
    publications.forEach((pub, index) => {
        const position = pub.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            pub.style.animationDelay = `${index * 0.2}s`;
            pub.classList.add('animate');
        }
    });
}

// Research area animations
function animateResearchAreas() {
    const areas = document.querySelectorAll('.research-area');
    areas.forEach((area, index) => {
        const position = area.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            area.style.animationDelay = `${index * 0.3}s`;
            area.classList.add('animate');
        }
    });
}

// Timeline animations
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('animate');
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Add initial styles for animations
    const elementsToAnimate = document.querySelectorAll('.publication-card, .research-area, .timeline-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animations on scroll
    window.addEventListener('scroll', function() {
        animatePublications();
        animateResearchAreas();
        animateTimeline();
    });
    
    // Initial check on load
    animatePublications();
    animateResearchAreas();
    animateTimeline();
});

// Add animated class when element is in viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', function() {
    const animatableElements = document.querySelectorAll('.publication-card, .research-area, .timeline-item, .stat-card');
    animatableElements.forEach(el => {
        observer.observe(el);
    });
});