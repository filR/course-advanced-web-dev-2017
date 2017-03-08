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
    let borderCSS = ``;
    $('.border').css('transform', borderCSS);
    
    
    // move text
    
    
    // move and rotate gradient
    
}


// when mouse moves over container element, call "tiltElement" function
$('.container').on('mousemove', tiltElement);
