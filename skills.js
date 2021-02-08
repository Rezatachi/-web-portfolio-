//LOADER


const loader = document.querySelector(".loading-wrapper");
window.onload = function(){
  setTimeout(function(){
    loader.style.opacity = "0";
    setTimeout(function(){
      loader.style.display = "none";
    }, 500);
  },900);
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
        
  function showButton() {


    var button  = $('#myBtn'), //button that scrolls user to top
        view = $(window),
        timeoutKey = -1;
  
    $(document).on('scroll', function() {
        if(timeoutKey) {
            window.clearTimeout(timeoutKey);
        }
        timeoutKey = window.setTimeout(function(){
  
            if (view.scrollTop() < 300) {
                button.fadeOut();
            }
            else {
                button.fadeIn();
            }
        }, 100);
    });
  }
  
  $('#myBtn').on('click', function(){
    $('html, body').stop().animate({
        scrollTop: 0
    }, 500, 'linear');
    return false;
  });
  
  //call function on document ready
  $(function(){
   showButton();
  });

  //Scroll Reveal
  ScrollReveal().reveal('.py-innerbar', {origin: 'left', distance: '500px', duration: 3000});
  ScrollReveal().reveal('.jv-innerbar', {origin: 'left', distance: '500px', duration: 3000, delay: 250});
  ScrollReveal().reveal('.ps-innerbar', {origin: 'left', distance: '500px', duration: 2000, delay: 1000});
  ScrollReveal().reveal('.be-innerbar', {origin: 'left', distance: '500px', duration: 3000, delay: 140});
  ScrollReveal().reveal('.wb-innerbar', {origin: 'left', distance: '500px', duration: 3000, delay: 740});
  ScrollReveal().reveal('.code-icons',{scale: '.2', duration: 2500});


