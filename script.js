// Scroll Animation Function
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

// Function to start the countdown timer
function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    function updateTimer() {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;
        const countdownElement = document.getElementById("countdown");
        if (countdownElement) {
            countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
            countdownElement.style.display = "block"; // Ensure visibility
        } else {
            console.warn("Countdown element not found!");
        }
        if (--timer < 0) {
            timer = duration; // Reset timer to initial duration
        }
    }
    updateTimer(); // Initial call
    setInterval(updateTimer, 1000);
}

// Ensure timer starts if element exists
document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.style.display = "block";
        startCountdown(3 * 3600);
    }
});

// Run on Scroll
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Initial check in case elements are already in view

// CTA Button Click Effect
document.getElementById("cta-button")?.addEventListener("click", function() {
    alert("Registration will open soon! Stay tuned.");
});

// Testimonial Slider Logic
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
function changeTestimonial(n) {
    testimonials[testimonialIndex].classList.remove("active");
    testimonialIndex = (testimonialIndex + n + testimonials.length) % testimonials.length;
    testimonials[testimonialIndex].classList.add("active");
}

// Auto-slide testimonials every 5 seconds
setInterval(() => changeTestimonial(1), 5000);

// FAQ Accordion Effect
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === "block";
        document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
        answer.style.display = isOpen ? "none" : "block";
    });
});
