// Your beautiful, formatted message!
const message = "Happy Monthsary sa'tin! Bago pa man ako magsimula, gusto ko lang malaman mo na, mahal na mahal kita ng sobra.<br><br>Actually hindi ko alam paano ko sisimulan 'to, pero gusto kong marinig mo mismo sa akin I love you, and sobrang lucky ko kasi ikaw yung kasama ko every day. Every month kasi na dumadaan, parang lalo lang lumalalim ang pagmamahal ko sa'yo, parang bago lagi kahit medyo matagal na tayo.<br><br>Thank you sa lahat, Love. Thank you sa patience mo, sa pagiging maunawain mo, at sa pagmamahal mo na hindi na kailangan pang bigyan ng reason para lang stay ka. Sobrang swerte ko talaga kasi hindi lang naman ikaw matalino at responsable, ang ganda mo pa hindi lang sa labas ha, pati na rin sa puso mo. Kada araw kasi, mas lumalala yung pagmamahal ko sa'yo kasi nakikita ko kung gaano ka kasipag, kung gaano mo kaseryoso mga pangarap mo, at kung gaano mo kamahal yung family niyo.<br><br>Pero hindi rin naman ako perfect, Love. Marami din akong kulang, marami akong mali. Sorry kung minsan nagtatalo tayo, sorry kung hindi ko lagi nabibigay yung gusto mo. Hindi naman kasi ito dahil ayoko kang masaya minsan natatakot lang talaga ako na baka masaktan ka o mapagod ka nang sobra.<br><br>Katulad noong lagi kitang pinipigilan mag OT. Alam mo ba kung bakit? Hindi kasi dahil ayoko lang basta basta ayoko lang kasi mapagod nang sobra ang katawan mo, ayoko madagdagan pa ng pressure ang nararamdaman mo mula sa trabaho. Alam ko naman may time pa rin tayo sa isa't isa kapag umuwi ako, pero hindi ko maitatanggi iba talaga pakiramdam ko kapag maaga kang nakakauwi. Doon ko lang siguro naipapakita nang buo kung gaano kita namimiss makasama.<br><br>Pero ngayon, mas naiintindihan ko na. Hindi lang ito tungkol sa akin ikaw pa rin kasi yung parang nanay sa mga kapatid mo, yung inaasahan nila, yung pinagkukunan nila. Kaya kung kailangan mong mag OT, sige, papayagan na kita isa lang hihilingin ko wag mo lang abusuhin. Wag mong ipagpalit health mo sa extra oras ng trabaho. Sana maintindihan mo, Love hindi to yung ako na gustong mag control sa'yo, gusto ko lang talaga na protektahan ka.<br><br>May isa pa akong gustong sabihin, kahit medyo hirap akong sabihin 'to. Alam mo naman sinabi ko na sa'yo dati pa, bago pa tayo maging tayo hindi ko kasi kaya yung partner na sobrang hilig uminom. Okay lang naman sa akin yung paminsan minsan, tatlo hanggang limang shot tapos tama na. Pero yung malasing nang husto doon talaga ako nahihirapan, Love. Alam kong choice mo na 'yan bago pa tayo nagsimula, kaya minsan naiisip ko na lang, sino ba ako para pigilan ka sa gusto mong gawin? At the end of the day, buhay mo pa rin naman 'yan, choice mo pa rin.<br><br>Kaya sorry kung minsan tumatampo ako, sorry kung minsan hindi ko na kaya itago yung kaba ko. Aamin ako, ito yung isa sa pinaka red flag para sa akin sa relasyon natin. Pero nandito pa rin ako hindi umaalis, hindi bumibitaw kasi mas malaki pa rin pagmamahal ko sa'yo kaysa sa takot ko. Sana maintindihan mo na hindi ko 'to sinasabi para husgahan ka, kundi dahil mahal na mahal kita, at gusto ko lagi kang safe, healthy, at masaya.<br><br>Sana patuloy tayong magmahalan at magtiwala sa isa't isa. Sana kahit anong pagsubok ang dumating, kaya nating harapin 'yun together kasi I believe kaya natin 'to. Hindi tayo perfect, pero yung paraan namin magmahalan, perfect.<br><br>Thank you sa pagiging ikaw, Love. Sana matagal pa tayo, sana dumami pa yung monthsary natin, at sana hanggang dulo, ikaw at ako pa rin.<br><br>I love you, ngayon, bukas, at hanggang sa habang panahon.<br><br>Happy Monthsary. 💛<br><br>Forever yours,<br><br>Bebe Renz";

// Add your photo filenames here
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
    "memory10.jpg"
];
let currentSlide = 0;

const speed = 25; 
let i = 0;
const textElement = document.getElementById("typewriter-text");
const bloomBtn = document.getElementById("bloom-btn");
const svg = document.getElementById("flower-svg");

let vw = window.innerWidth;
let vh = window.innerHeight;
let gardenBloomed = false; 

// --- 1. The Exploding Envelope Click Event ---
document.getElementById("welcome-screen").addEventListener("click", function() {
    if (this.classList.contains("opened")) return;
    this.classList.add("opened");

    const music = document.getElementById("bg-music");
    if(music) {
        music.volume = 0.5; 
        music.play().catch(e => console.log("Audio blocked"));
    }

    const bigHeart = document.getElementById("envelope-heart");
    const tapHint = document.querySelector(".tap-hint");
    bigHeart.classList.add("explode-heart");
    if(tapHint) tapHint.style.opacity = "0";

    for(let j = 0; j < 25; j++) {
        setTimeout(() => {
            const drop = document.createElement("div");
            drop.innerHTML = "💖";
            drop.classList.add("falling-heart");
            drop.style.left = (Math.random() * 100) + "vw";
            drop.style.fontSize = (Math.random() * 1.5 + 1) + "rem";
            drop.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
            document.body.appendChild(drop);
            setTimeout(() => drop.remove(), 4000);
        }, Math.random() * 600); 
    }

    // --- The Master Animation Sequence ---
    setTimeout(() => {
        this.style.opacity = "0";
        setTimeout(() => { this.style.visibility = "hidden"; }, 1000); 

        generateGarden(); 
        
        setTimeout(() => {
            document.getElementById("env-flap").classList.add("open");
            
            setTimeout(() => {
                document.getElementById("letter").classList.add("emerge");
                
                setTimeout(() => {
                    document.getElementById("env-back").classList.add("dismiss");
                    document.getElementById("env-front").classList.add("dismiss");
                    document.getElementById("env-flap").classList.add("dismiss");
                    
                    const letter = document.getElementById("letter");
                    letter.classList.remove("emerge"); 
                    letter.classList.add("center"); 
                    
                    setTimeout(() => {
                        document.getElementById("letter-title").classList.add("show");
                        setTimeout(typeWriter, 500); 
                    }, 1000); 

                }, 1000); 

            }, 800); 

        }, 1000); 

    }, 700); 
});

// --- 2. Advanced Typewriter Logic ---
function typeWriter() {
    if (i < message.length) {
        
        if (message.charAt(i) === '<') {
            let tag = "";
            while (message.charAt(i) !== '>' && i < message.length) {
                tag += message.charAt(i);
                i++;
            }
            tag += '>'; 
            textElement.innerHTML += tag;
            i++; 
            
            const letter = document.getElementById("letter");
            letter.scrollTop = letter.scrollHeight;
            
            setTimeout(typeWriter, 0); 
        } else {
            textElement.innerHTML += message.charAt(i);
            i++;
            
            const letter = document.getElementById("letter");
            letter.scrollTop = letter.scrollHeight;
            
            setTimeout(typeWriter, speed);
        }
        
    } else {
        setTimeout(() => { 
            bloomBtn.classList.add("show"); 
            document.getElementById("letter").scrollTop = document.getElementById("letter").scrollHeight;
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

// --- 4. NEW: Accurate Month Live Time Counter Logic ---
const anniversaryDate = new Date("April 16, 2026 00:00:00");

function updateCounter() {
    const now = new Date();
    
    // Calculate the total months mathematically
    let months = (now.getFullYear() - anniversaryDate.getFullYear()) * 12 + (now.getMonth() - anniversaryDate.getMonth());
    
    // If the current day of the month hasn't passed the anniversary day yet, subtract 1 month to stay accurate
    if (now.getDate() < anniversaryDate.getDate() || (now.getDate() === anniversaryDate.getDate() && now.getTime() < anniversaryDate.getTime())) {
        months--;
    }

    // Create a temporary date to calculate the exact remaining days after those months have passed
    const recentAnniversary = new Date(anniversaryDate);
    recentAnniversary.setMonth(recentAnniversary.getMonth() + months);

    // Calculate the remaining time in milliseconds
    const difference = now.getTime() - recentAnniversary.getTime();

    // Break down the remaining milliseconds into days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Output the new format to the screen
    document.getElementById("time-counter").innerHTML = 
        `${months} Months, ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}
updateCounter();
setInterval(updateCounter, 1000);

// --- 5. The Cinematic Surprise Button Click Event ---
bloomBtn.addEventListener("click", () => {
    const mailScene = document.getElementById("mail-scene");
    mailScene.style.opacity = "0";
    setTimeout(() => { mailScene.style.display = "none"; }, 1000);

    document.getElementById("bg-overlay").classList.add("dim");
    
    document.getElementById("flower-container").classList.add("visible");
    svg.classList.add("grow");
    gardenBloomed = true; 
    
    setTimeout(() => {
        document.getElementById("monthsary-text").classList.add("show");
        document.getElementById("counter-container").classList.add("show"); 
        
        setTimeout(() => {
            document.getElementById("gallery-btn").classList.add("show");
        }, 4000);

    }, 1200); 
});

// --- 6. Interactive Easter Egg (Heart Burst) ---
document.addEventListener("click", (e) => {
    if (!gardenBloomed) return;
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

// --- 7. Gallery Logic ---
const galleryModal = document.getElementById("photo-gallery");
const galleryImg = document.getElementById("gallery-img");

document.getElementById("gallery-btn").addEventListener("click", () => {
    currentSlide = 0;
    galleryImg.src = memories[currentSlide];
    galleryModal.style.display = "block";
});

document.querySelector(".close-btn").addEventListener("click", () => {
    galleryModal.style.display = "none";
});

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= memories.length) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = memories.length - 1;
    galleryImg.src = memories[currentSlide];
}