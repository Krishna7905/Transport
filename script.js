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

// tranportation section of index 
document.addEventListener("DOMContentLoaded", () => {
    const headingImage = document.querySelector(".heading-container img");

    function adjustHeadingImageSize() {
        if (window.innerWidth <= 768) {
            headingImage.style.width = "80px";
        } else {
            headingImage.style.width = "150px";
        }
    }

    window.addEventListener("resize", adjustHeadingImageSize);
    adjustHeadingImageSize(); // Initial adjustment on load
});



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


function redirectToGoogleMaps(destination) {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank'); // Open in a new tab
}


// Toggle Additional Details
function toggleDetails(card) {
    const details = card.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
