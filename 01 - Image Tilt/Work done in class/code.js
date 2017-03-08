'use strict';


function tiltElement(event) {
    let x = event.offsetX / this.offsetWidth - 0.5;
    let y = event.offsetY / this.offsetHeight - 0.5;
    
    console.log('mouse position:', x, y);
    
    $('.background').css('transform', `rotateY(0) rotateX(${x * 60}deg)`);
}

$('.container').on('mousemove', tiltElement);
