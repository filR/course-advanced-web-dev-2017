'use strict';


function tiltElement(event) {
    let x = event.offsetX / this.offsetWidth;
    let y = event.offsetY / this.offsetHeight;
    
    console.log('mouse position:', x, y);
    
    $('.background').css('transform', 'rotateX(45deg)');
}

$('.background').on('mousemove', tiltElement);
