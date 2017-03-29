"use strict";

const NUM_OF_PARTICLES = 200;

// get canvas
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

// set canvas size
canvas.height = window.innerHeight * 2;
canvas.width = window.innerWidth * 2;
const height = canvas.height;
const width = canvas.width;

let particles = [];

for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle());
}


// update mouse position
let mouseX;
let mouseY;
document.onmousemove = function (event) {
    mouseX = event.pageX * 2;
    mouseY = event.pageY * 2;
}


// run x times a second
function loop() {
    
    // clear canvas
    context.clearRect(0, 0, width, height);
    
//    context.fillStyle = 'hsla(200, 80%, 90%, 0.05)';
//    context.fillRect(0, 0, width, height);
    

    // for every particle
    particles.forEach((particle) => {
        
        particle.update();
        particle.draw(context);
    });
    
    window.requestAnimationFrame(loop);
}

loop();









