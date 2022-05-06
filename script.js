// mobile menu toogle 

const hamburger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=>{
navLinks.classList.toggle('show');
});

const date = new Date();
let year = date.getFullYear();

const updateYear = document.querySelector('.year');
updateYear.innerHTML= year;