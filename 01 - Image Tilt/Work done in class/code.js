'use strict';


function tiltElement(event) {
    let x = event.offsetX / this.offsetWidth;
    let y = event.offsetY / this.offsetHeight;
    
    console.log('mouse position:', x, y);
    
    $('.background').css('transform', 'rotateX(' + x*60 + 'deg)');
}

$('.container').on('mousemove', tiltElement);
