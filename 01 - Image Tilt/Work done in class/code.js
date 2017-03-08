'use strict';

function tiltElement(event) {
    
    // get mouse position
    // from -0.5 to 0.5, 0 is centre
    let x = event.offsetX / this.offsetWidth - 0.5;
    let y = event.offsetY / this.offsetHeight - 0.5;
    
    // tilt entire element
    let backgroundCSS = `rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    $('.background').css('transform', backgroundCSS);
    
    
    // move white border
    let borderCSS = `translateX(${x * 15}px) translateY(${y * 15}px)`;
    $('.border').css('transform', borderCSS);
    
    
    // move text
    let textCSS = `translateX(${x * 20}px) translateY(${y * 20}px)`;
    $('.text').css('transform', textCSS);
    
    
    // move and rotate gradient
    let gradientCSS = `translateX(${x * 20}px) translateY(${y * 20}px) rotateZ(${x * 2}deg)`;
    $('.gradient').css('transform', gradientCSS);
    
}


// when mouse moves over container element, call "tiltElement" function
$('.container').on('mousemove', tiltElement);
