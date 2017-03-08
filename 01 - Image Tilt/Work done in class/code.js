'use strict';

function tiltElement(event) {
    
    // get mouse position
    // from -0.5 to 0.5, 0 is centre
    let x = event.offsetX / this.offsetWidth - 0.5;
    let y = event.offsetY / this.offsetHeight - 0.5;
    
    // tilt entire element
    let backgroundCSS = `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
    $('.background').css('transform', backgroundCSS);
    
    // move white border
    let borderCSS = ``; // translateX(xx) translateY(xx)
    $('.border').css('transform', borderCSS);
    
    
    // move text
    let textCSS = ``; // translateX(xx) translateY(xx)
    $('.text').css('transform', textCSS);
    
    // move and rotate gradient
    let gradientCSS = ``; // translateX(xx) translateY(xx) rotateY(xx)
    $('.gradient').css('transform', gradientCSS);
    
}


// when mouse moves over container element, call "tiltElement" function
$('.container').on('mousemove', tiltElement);
