// ===============================
// Dark / Light Mode
// ===============================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
// ===============================
// Typing Animation
// ===============================
const words = [
    "Computer Science Student",
    "Frontend Web Developer",
    "Graphic Designer",
    "Technology Enthusiast",
    "Problem Solver"
];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;
const typing = document.querySelector(".typing");
function typeEffect() {
    const currentWord = words[wordIndex];
    if (!deleting) {
        typing.textContent =
            currentWord.substring(0, letterIndex++);
        if (letterIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }
    } else {
        typing.textContent =
            currentWord.substring(0, letterIndex--);
        if (letterIndex < 0) {
            deleting = false;
            wordIndex++;
            if (wordIndex >= words.length)
                wordIndex = 0;
        }
    }
    setTimeout(typeEffect, deleting ? 60 : 120);
}
typeEffect();
// ===============================
// Back To Top Button
// ===============================
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// ===============================
// Scroll Reveal Animation
// ===============================
const sections = document.querySelectorAll("section");
function revealSections() {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition =
        "all 0.8s ease";
});
window.addEventListener("scroll", revealSections);
revealSections();
// ===============================
// Active Navigation Link
// ===============================
const navLinks = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
// ===============================
// Welcome Message
// ===============================
window.addEventListener("load", () => {
    console.log("Welcome to OGAGA GOD'SFAVOUR OCHUKO's Portfolio");
});
// ===============================
// Loading Screen
// ===============================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1800);
});
// Circular Skills Animation
const circles = document.querySelectorAll(".circle");
function animateSkills() {
    circles.forEach(circle => {
        const percent = parseInt(circle.dataset.percent);
        const progress = circle.querySelector(".progress");
        const number = circle.querySelector(".number");
        const radius = 60;
        const circumference = 2 * Math.PI * radius;
        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset = circumference;
        let current = 0;
        const interval = setInterval(() => {
            if (current >= percent) {
                clearInterval(interval);
            } else {
                current++;
            }
            number.textContent = current + "%";
            const offset = circumference - (current / 100) * circumference;
            progress.style.strokeDashoffset = offset;
        }, 20);
    });
}
let started = false;
window.addEventListener("scroll", () => {
    const skills = document.getElementById("skills");
    const position = skills.getBoundingClientRect().top;
    if (position < window.innerHeight - 100 && !started) {
        started = true;
        animateSkills();
    }
});