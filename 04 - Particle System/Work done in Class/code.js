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


// run x times a second
function loop() {
    
    // clear canvas
    context.clearRect(0, 0, width, height);

    // for every particle
    particles.forEach((particle) => {
        
        particle.update();
        particle.draw(context);
    });
    
    window.requestAnimationFrame(loop);
}

loop();









