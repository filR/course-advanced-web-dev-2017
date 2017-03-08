'use strict';


function tiltElement(event) {
    let x = event.offsetX / this.offsetWidth - 0.5;
    let y = event.offsetY / this.offsetHeight - 0.5;
    
    console.log('mouse position:', x, y);
    
    let backgroundCSS = `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
    $('.background').css('transform', backgroundCSS);
}

$('.container').on('mousemove', tiltElement);
