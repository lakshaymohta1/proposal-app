function sayNo() {
    alert("No is not an option 😌❤️ Try again!");
}

function sayYes() {
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("proposalBox").classList.remove("hidden");
    startHearts();
}

/* HEART ANIMATION */
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = "20px";
        heart.style.animation = "floatUp 5s linear";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

/* HEART KEYFRAMES */
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-120vh); opacity: 0; }
}`;
document.head.appendChild(style);

/* IMAGE SLIDER - CONTINUOUS */
const slides = document.getElementById("slides");
const images = slides.children;
let index = 0;

/* Clone first image and append it */
const firstClone = images[0].cloneNode(true);
slides.appendChild(firstClone);

const totalSlides = slides.children.length;

setInterval(() => {
    index++;
    slides.style.transition = "transform 0.6s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;

    /* When last clone is reached */
    if (index === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = "none";
            index = 0;
            slides.style.transform = `translateX(0)`;
        }, 600);
    }
}, 2500);

/* ===== BACKGROUND HEARTS ===== */
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "bg-heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 6 + "s";
    heart.style.fontSize = Math.random() * 10 + 18 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}, 700);

