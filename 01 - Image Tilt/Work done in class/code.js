'use strict';


function tiltElement(event) {
    let x = event.offsetX / this.offsetWidth - 0.5;
    let y = event.offsetY / this.offsetHeight - 0.5;
    
    console.log('mouse position:', x, y);
    
    let backgroundCSS = `rotateY(${y * 5}deg) rotateX(${x * 5}deg)`;
    $('.background').css('transform', backgroundCSS);
}

$('.container').on('mousemove', tiltElement);
