// Tab functionality for skills section
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding tab pane
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Animate timeline items on scroll
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
}

// Initialize timeline animation
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

document.querySelectorAll('.timeline-item:nth-child(odd)').forEach(item => {
    item.style.transform = 'translateX(-50px)';
});

document.querySelectorAll('.timeline-item:nth-child(even)').forEach(item => {
    item.style.transform = 'translateX(50px)';
});

window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);