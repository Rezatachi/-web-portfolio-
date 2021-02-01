//LOADER


const loader = document.querySelector(".loading-wrapper");
window.onload = function(){
  setTimeout(function(){
    loader.style.opacity = "0";
    setTimeout(function(){
      loader.style.display = "none";
    }, 500);
  },1500);
}




// Bar Anim
const menuBtn = document.querySelector('.menu-btn');
const navContent = document.querySelector('.navbar');
let menuOpen = false;
let menuSize = false;
menuBtn.addEventListener('click', ()=>{
navContent.classList.toggle('change');
  if(!menuOpen && !menuSize) {
      menuBtn.classList.add('open');
      menuBtn.classList.add('size');
      menuOpen = true;
      menuSize = true;
  }
  else {
      menuBtn.classList.remove('open');
      menuBtn.classList.remove('size');
      menuOpen = false;
      menuSize = false;
  }

});

//writer-text
var options = {
  strings: ["<span style='color:red'>Software Developer{}</span>", 
  "<span style='color:blue'>Photographer</span>", "<span style='color:gray'>Graphic Designer</span>"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
};
var typed = new Typed('.animate', options);


//Dark Mode Text Changer
const doptions = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#D8D8D8',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(doptions);
darkmode.showWidget();
      


//Scroll Reveal
ScrollReveal().reveal('.about-area h1', {distance: '100px', delay: 250});
ScrollReveal().reveal('.about-area p', {distance: '100px', delay: 500});


//Main Transform to about
const aboutBtn = document.querySelector('.aboutme-btn');
const main = document.querySelector('.main');
const about = document.querySelector('.about');
