let bg = document.getElementById("background");
let logo = document.getElementById("hvid-logo");
let lPalme = document.getElementById("left");
let rPalme = document.getElementById("right");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';  
    logo.style.top = value * 0.6 + 'px';  
    lPalme.style.left = value * 0.5 + 'px';  
    rPalme.style.right = value * 0.5 + 'px';  
})



