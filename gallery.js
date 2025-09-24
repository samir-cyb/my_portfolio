// Gallery Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const gridItems = document.querySelectorAll('.grid-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        gridItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.classList.add('animate');
                }, 100);
            } else {
                item.style.display = 'none';
                item.classList.remove('animate');
            }
        });
    });
});

// Lightbox Functionality
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption h3');
const lightboxDesc = document.querySelector('.lightbox-caption p');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

let currentIndex = 0;

// Open lightbox when grid item is clicked
gridItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    const imgSrc = gridItems[currentIndex].querySelector('img').src;
    const caption = gridItems[currentIndex].querySelector('h3').textContent;
    const desc = gridItems[currentIndex].querySelector('p').textContent;
    
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightboxDesc.textContent = desc;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close lightbox
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
});

lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Navigation in lightbox
prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
    openLightbox();
});

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % gridItems.length;
    openLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
            openLightbox();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % gridItems.length;
            openLightbox();
        }
    }
});

// Animate grid items on scroll
function animateGridItems() {
    gridItems.forEach(item => {
        const position = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            item.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateGridItems);
window.addEventListener('load', animateGridItems);