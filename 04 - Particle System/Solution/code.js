"use strict";

// setup context
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

// setup size of canvas
let width = window.innerWidth * 2;
let height = window.innerHeight * 2;
canvas.width = width;
canvas.height = height;


// setup particles
let particles = [];
for (var i = 0; i < 100; i++ ) {
    particles.push(spawnParticle());
}

// spawn single new particle
function spawnParticle () {
    return new Particle({
        x: getRandomNumber(0, width),
        y: getRandomNumber(0, height),
        radius: getRandomNumber(10, 50),
        color: `hsl(${ getRandomNumber(0, 360) }, 50%, 65%)`,
        speedX: getRandomNumber(-3, 3),
        speedY: getRandomNumber(-3, 3)
    });
}

// helper function for random numbers
function getRandomNumber(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// game loop
function loop() {
    context.clearRect(0, 0, width, height);
    
    particles.forEach((particle) => {
        particle.update();
        particle.draw(context);
    });

    window.requestAnimationFrame(loop);
}

loop();
