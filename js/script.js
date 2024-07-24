// menu
let menuOpener = document.querySelector(".menu-opener");
let nav = document.querySelector("header nav");

menuOpener.addEventListener("click", () => {
    if (nav.classList.contains("opened")) {
        nav.classList.remove("opened");
        menuOpener.querySelector(".close-icon").style.display = "none";
        menuOpener.querySelector(".hamburger-icon").style.display = "flex";
    } else {
        nav.classList.add("opened");
        menuOpener.querySelector(".close-icon").style.display = "flex";
        menuOpener.querySelector(".hamburger-icon").style.display = "none";
    }
});

//testimonials
let testimonials = [
    {
        quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."',
        origin: "cbs.svg",
    },
    {
        quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."',
        origin: "forbes.svg",
    },
    {
        quote: '"DogDev usa ingredientes simples e limpos em seus pratos"',
        origin: "fox.svg",
    },
    {
        quote: '"Vejo você [João] como um verdadeiro herói"',
        origin: "sharktank.svg",
    },
];

let testimonialQuote = document.querySelector(".testimonials .quote");
let testimonialIcons = document.querySelector(".testimonials .icons");

for (let tindex in testimonials) {
    let img = document.createElement("img");
    img.setAttribute(
        "src",
        "./imagens/" + testimonials[parseInt(tindex)].origin
    );
    img.style.cursor = "pointer";
    img.addEventListener("click", () => fillTestimonial(parseInt(tindex)));
    testimonialIcons.appendChild(img);
}

let currentTestimonial = 0;
let testimonialTimer;

const fillTestimonial = (index) => {
    clearTimeout(testimonialTimer);
    currentTestimonial = index;
    testimonialQuote.innerHTML = testimonials[currentTestimonial].quote;
    let imgs = testimonialIcons.querySelectorAll("img");
    for (let img of imgs) {
        img.style.opacity = 0.2;
    }
    imgs[currentTestimonial].style.opacity = 1;
    testimonialTimer = setTimeout(nextTestimonial, 3000);
};

const nextTestimonial = () => {
    if (testimonials[currentTestimonial + 1]) {
        fillTestimonial(currentTestimonial + 1);
    } else {
        fillTestimonial(0);
    }
};

nextTestimonial();
