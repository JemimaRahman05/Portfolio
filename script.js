// =========================
// Typing Animation
// =========================

const words = [
    "Computer Science Student",
    "Machine Learning Enthusiast",
    "Data Science Learner",
    "Web Developer",
    "AI Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

if (typingText) {

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingText.textContent = currentWord.substring(0, charIndex);

            charIndex++;

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1200);

                return;
            }

        } else {

            typingText.textContent = currentWord.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 120);
    }

    typeEffect();
}


// =========================
// Reveal Animation
// =========================

function revealSections(){

const reveals=document.querySelectorAll(".reveal");

reveals.forEach(section=>{

const windowHeight=window.innerHeight;

const elementTop=section.getBoundingClientRect().top;

const revealPoint=120;

if(elementTop<windowHeight-revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();


// =========================
// Scroll Progress Bar
// =========================

window.addEventListener("scroll",()=>{

const winScroll=document.body.scrollTop ||
document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});


// =========================
// Back To Top Button
// =========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(document.documentElement.scrollTop>350){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// =========================
// Active Navigation Link
// =========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});