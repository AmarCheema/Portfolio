// Script for Smooth Scrolling on Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle (Optional)
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.body;

// Check localStorage for dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
} else {
    body.classList.remove("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save the user preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Hover Effect for Project Images (Click to Open or Zoom Effect)
document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', function () {
        this.style.transform = 'scale(1.05)';
    });

    img.addEventListener('transitionend', function () {
        this.style.transition = 'transform 0.3s ease'; // Reset after transition
    });
});
