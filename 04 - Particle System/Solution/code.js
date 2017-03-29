"use strict";

// setup context
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

// setup size of canvas
let width = window.innerWidth * 2;
let height = window.innerHeight * 2;
canvas.width = width;
canvas.height = height;

// load image
let image = new Image();
image.src = 'head.png';

// setup particles
let particles = [];
for (var i = 0; i < 300; i++ ) {
    particles.push(spawnParticle());
    
    // sort particles, largest on "top"
    particles.sort((a, b) => {
       return a.radius - b.radius; 
    });
}

// spawn single new particle
function spawnParticle () {
    let size = getRandomNumber(20, 100);
    
    return new Particle({
        x: getRandomNumber(0, width),
        y: getRandomNumber(0, height),
        radius: size,
        color: `hsl(${ getRandomNumber(0, 360) }, 50%, 65%)`,
//        speedX: getRandomNumber(-3, 3),
//        speedY: getRandomNumber(-3, 3)
        speedX: size / 30 // largest particles go faster
    });
}

// helper function for random numbers
function getRandomNumber(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// reset particles
function recycleIfNecessary(particle) {
    if (particle.x > width) {
        particle.x = 0.1;
    }
}

// track mouse
let mouseX;
let mouseY;
document.onmousemove = (event) => {
    mouseX = event.pageX * 2; // * 2 = retina
    mouseY = event.pageY * 2;
}

// game loop
function loop() {
    
    // clear rectangle
//    context.clearRect(0, 0, width, height);

    // transparent clear
//    context.fillStyle = 'rgba(255, 255, 255, 0.05)';
//    context.fillRect(0, 0, width, height);
    
    
    particles.forEach((particle) => {
        particle.update();
        particle.draw(context);
        
        recycleIfNecessary(particle);
    });

    window.requestAnimationFrame(loop);
}

loop();
