// Replace this with your actual sweet message!
const message = "I just wanted to take a moment to tell you how incredibly special you are to me. Every single day with you is a beautiful adventure. I am so grateful for your smile, your warmth, and the way you make everything better. I love you more than words can say, and I can't wait for all the memories we are going to create together.";

// --- NEW: Add your photo filenames here! ---
const memories = [
    "memory1.jpg",
    "memory2.jpg",
    "memory3.jpg",
    "memory4.jpg",
    "memory5.jpg",
    "memory6.jpg",
    "memory7.jpg",
    "memory8.jpg",
    "memory9.jpg",
    "memory10.jpg" // You can add more by putting a comma and "memory4.jpg" etc.
];
let currentSlide = 0;

const speed = 60; 
let i = 0;
const textElement = document.getElementById("typewriter-text");
const bloomBtn = document.getElementById("bloom-btn");
const svg = document.getElementById("flower-svg");

let vw = window.innerWidth;
let vh = window.innerHeight;
let gardenBloomed = false; 

// --- 1. The Envelope Click Event ---
document.getElementById("welcome-screen").addEventListener("click", function() {
    const music = document.getElementById("bg-music");
    if(music) {
        music.volume = 0.5; 
        music.play();
    }

    this.style.opacity = "0";
    setTimeout(() => { 
        this.style.visibility = "hidden"; 
    }, 1000); 

    generateGarden();
    setTimeout(typeWriter, 1000); 
});

// --- 2. Typewriter Logic ---
function typeWriter() {
    if (i < message.length) {
        textElement.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => { 
            bloomBtn.classList.add("show"); 
        }, 1000);
    }
}

// --- 3. DYNAMIC RESPONSIVE GENERATOR LOGIC ---
function createGrass() {
    const grassCount = vw < 768 ? 60 : 150; 
    for (let i = 0; i < grassCount; i++) { 
        const x = Math.random() * vw; 
        const height = (vw < 768 ? 50 : 80) + Math.random() * (vh * 0.15); 
        const curve = (Math.random() - 0.5) * 90; 
        const grass = document.createElementNS("http://www.w3.org/2000/svg", "path");
        grass.setAttribute("class", "grass");
        grass.setAttribute("d", `M ${x} ${vh + 50} Q ${x + curve} ${vh - height/2} ${x + curve*2} ${vh - height}`);
        const greens = ["#28a745", "#20c997", "#198754", "#146c43"];
        grass.style.stroke = greens[Math.floor(Math.random() * greens.length)];
        grass.style.setProperty("--delay", `${Math.random() * 1.5}s`);
        svg.appendChild(grass);
    }
}

function generatePlant(targetX, targetY, delaySec, scale) {
    const startX = (vw * 0.5) + (Math.random() - 0.5) * (vw * 0.4); 
    const startY = vh + 50; 
    
    const stem = document.createElementNS("http://www.w3.org/2000/svg", "path");
    stem.setAttribute("class", "stem");
    const controlX = startX + (targetX - startX) / 2 + (Math.random() - 0.5) * (vw * 0.1);
    const controlY = targetY + (vh - targetY) / 2;
    stem.setAttribute("d", `M ${startX} ${startY} Q ${controlX} ${controlY} ${targetX} ${targetY}`);
    stem.style.setProperty("--delay", `${delaySec}s`);
    svg.appendChild(stem);

    for (let i = 1; i <= 4; i++) {
        const leaf = document.createElementNS("http://www.w3.org/2000/svg", "path");
        leaf.setAttribute("class", "leaf");
        leaf.setAttribute("d", "M 0 0 C 20 -15, 30 -40, 50 -50 C 25 -30, 10 -10, 0 0");
        const t = i / 5;
        const lx = Math.pow(1-t, 2)*startX + 2*(1-t)*t*controlX + Math.pow(t, 2)*targetX;
        const ly = Math.pow(1-t, 2)*startY + 2*(1-t)*t*controlY + Math.pow(t, 2)*targetY;
        const isLeft = i % 2 === 0;
        leaf.style.setProperty("--tx", `${lx}px`);
        leaf.style.setProperty("--ty", `${ly}px`);
        leaf.style.setProperty("--r", `${isLeft ? -30 : 30}deg`);
        leaf.style.setProperty("--sx", `${isLeft ? -scale : scale}`);
        leaf.style.setProperty("--sy", `${scale}`);
        leaf.style.setProperty("--delay", `${delaySec + (t * 1.5)}s`);
        svg.appendChild(leaf);
    }

    const flowerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    flowerGroup.style.transform = `translate(${targetX}px, ${targetY}px)`;
    
    createPetalRing(flowerGroup, 12, scale * 1.2, "#cc003d", delaySec + 1.5);
    createPetalRing(flowerGroup, 10, scale * 0.9, "#ff004c", delaySec + 1.8);
    createPetalRing(flowerGroup, 8, scale * 0.6, "#ff4d79", delaySec + 2.1);

    const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    core.setAttribute("class", "core");
    core.setAttribute("r", `${12 * scale}`);
    core.setAttribute("fill", "#ffea00");
    core.style.setProperty("--delay", `${delaySec + 2.4}s`);
    flowerGroup.appendChild(core);

    svg.appendChild(flowerGroup);

    for(let p = 0; p < 5; p++) {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("class", "particle");
        dot.setAttribute("cx", targetX + (Math.random() - 0.5) * 80);
        dot.setAttribute("cy", targetY + (Math.random() - 0.5) * 80);
        dot.setAttribute("r", Math.random() * 3 + 1);
        dot.setAttribute("fill", p % 2 === 0 ? "#2de2e6" : "#ffea00");
        dot.style.setProperty("--delay", `${delaySec + 2 + Math.random() * 2}s`);
        svg.appendChild(dot);
    }
}

function createPetalRing(group, count, scale, color, delaySec) {
    for (let i = 0; i < count; i++) {
        const angle = (360 / count) * i + (Math.random() * 10);
        const petal = document.createElementNS("http://www.w3.org/2000/svg", "path");
        petal.setAttribute("class", "petal");
        petal.setAttribute("d", "M 0 0 C -20 -30, -30 -70, 0 -90 C 30 -70, 20 -30, 0 0");
        petal.setAttribute("fill", color);
        petal.style.setProperty("--r", `${angle}deg`);
        petal.style.setProperty("--s", `${scale}`);
        petal.style.setProperty("--delay", `${delaySec + (i * 0.05)}s`);
        group.appendChild(petal);
    }
}

function generateGarden() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    svg.setAttribute("viewBox", `0 0 ${vw} ${vh}`);
    
    createGrass();
    
    const isMobile = vw < 768;
    const s = isMobile ? 0.6 : 1.0; 
    
    const y1 = vh * 0.65; 
    const y2 = vh * 0.75; 
    const y3 = vh * 0.85; 

    generatePlant(vw * 0.50, y1, 0.5, 1.1 * s);   
    generatePlant(vw * 0.30, y2, 0.8, 0.9 * s);   
    generatePlant(vw * 0.70, y2, 1.0, 0.9 * s);   
    generatePlant(vw * 0.15, y3, 1.2, 0.7 * s);   
    generatePlant(vw * 0.85, y3, 1.4, 0.7 * s);   
    generatePlant(vw * 0.40, y3 + 20, 1.6, 0.6 * s); 
    generatePlant(vw * 0.60, y3 + 20, 1.8, 0.6 * s); 
}

// --- 4. The Live Time Counter Logic ---
const anniversaryDate = new Date("April 16, 2026 00:00:00").getTime();

function updateCounter() {
    const now = new Date().getTime();
    const difference = now - anniversaryDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("time-counter").innerHTML = 
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}
updateCounter();
setInterval(updateCounter, 1000);

// --- 5. The Surprise Button Click Event ---
bloomBtn.addEventListener("click", () => {
    document.getElementById("main-content").classList.add("dim");
    document.getElementById("flower-container").classList.add("visible");
    svg.classList.add("grow");
    bloomBtn.style.display = "none";
    
    gardenBloomed = true; 
    
    setTimeout(() => {
        document.getElementById("monthsary-text").classList.add("show");
        document.getElementById("counter-container").classList.add("show"); 
        
        // NEW: Wait 4 seconds after the counter appears, then show the gallery button!
        setTimeout(() => {
            document.getElementById("gallery-btn").classList.add("show");
        }, 4000);

    }, 500); 
});

// --- 6. Interactive Easter Egg (Heart Burst) ---
document.addEventListener("click", (e) => {
    if (!gardenBloomed) return;
    // Don't burst hearts if clicking buttons or gallery
    if(e.target.closest('button') || e.target.closest('.modal')) return;

    const numHearts = Math.floor(Math.random() * 3) + 3;
    for(let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart-burst");
        
        const offsetX = (Math.random() - 0.5) * 40;
        const offsetY = (Math.random() - 0.5) * 40;
        
        heart.style.left = (e.clientX + offsetX) + "px";
        heart.style.top = (e.clientY + offsetY) + "px";
        heart.style.animationDuration = (1.5 + Math.random()) + "s";
        
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
});

// --- 7. NEW: Gallery Logic ---
const galleryModal = document.getElementById("photo-gallery");
const galleryImg = document.getElementById("gallery-img");

// Open Gallery
document.getElementById("gallery-btn").addEventListener("click", () => {
    currentSlide = 0;
    galleryImg.src = memories[currentSlide];
    galleryModal.style.display = "block";
});

// Close Gallery
document.querySelector(".close-btn").addEventListener("click", () => {
    galleryModal.style.display = "none";
});

// Change Slide
function changeSlide(direction) {
    currentSlide += direction;
    
    // Loop back to start or end if they go out of bounds
    if (currentSlide >= memories.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = memories.length - 1;
    }
    
    galleryImg.src = memories[currentSlide];
}