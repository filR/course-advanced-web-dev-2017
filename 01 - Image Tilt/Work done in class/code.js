
function tiltElement(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    
    console.log('mouse position:', x, y);
}

$('.background').on('mousemove', tiltElement);
