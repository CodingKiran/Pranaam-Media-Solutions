// mobile menu toogle 

const hamburger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=>{
navLinks.classList.toggle('show');
});

