
// Animate skill bars when in viewport
function animateSkills() {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        const position = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            skill.style.width = skill.getAttribute('data-width');
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// 3D Card Effect for Profile Card
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
    profileCard.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    profileCard.addEventListener('mouseenter', function() {
        this.style.transition = 'none';
    });

    profileCard.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.5s ease';
        this.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
}