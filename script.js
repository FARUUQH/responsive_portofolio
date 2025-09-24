// Global variable 
const themes = ['default', 'blue', 'green'];
let currentTheme = 0;

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.querySelector('.theme-icon');
const typingText = document.getElementById('typing-text');

// initialize the website
document.addEventListener('DOMContentLoaded', function () {
    initializetypinganimation();
    initializeparticle();
})
// Mobile Nav toggle 
hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link //

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
    });
})
// Theme Switcher

themeBtn.addEventListener('click', function () {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.setAttribute('data-theme', themes[currentTheme])

    //    update icon 
    const icons = ['🌈', '🫐', '🤑'];
    themeIcon.textContent = icons[currentTheme];

});


// typing animation
function initializetypinganimation() {
    const texts = [
        'Frontend Developer',
        'Backend Developer',
        'Cyber security Enthusiast',
        'Soto Betawi'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        }
        else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 2000;
        }
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeSpeed = 500;
            textIndex = (textIndex + 1) % texts.length;

        }
        setTimeout(typeText, typeSpeed);
    };


    typeText();


}
// particles Animation;
function initializeparticle() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 5;

    for (let i = 0; i < particleCount; i++) {
        createParticles();
    }
    function createParticles() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particlesContainer.appendChild(particle);

        //Remove and Recreate particle 
        setTimeout(() => {
            // particle.remove();
            createParticles();
        }, 10000);
    }
}


