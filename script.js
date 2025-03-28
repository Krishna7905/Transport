const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Initialize slideshow
function startSlideshow() {
    showSlide(currentSlide);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000); // Slide changes every 3 seconds
}

// Start the slideshow
document.addEventListener('DOMContentLoaded', startSlideshow);


// about section 
// Scroll-to-Top Button
const scrollTopButton = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// services map 


/**
         * Redirects user to Google Maps for the specified destination coordinates.
         * @param {string} destination - The latitude and longitude of the office location (e.g., "21.2032,72.8243").
         */
function redirectToGoogleMaps(destination) {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank'); // Open in a new tab
}