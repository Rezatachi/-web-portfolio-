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
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(doptions);
  darkmode.showWidget();
        
//Scroll Reveal
ScrollReveal({reset: true});
ScrollReveal().reveal('grid-item', {delay: 250});
