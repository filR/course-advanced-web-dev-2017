"use strict";

// get canvas
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

// set canvas size
canvas.height = window.innerHeight * 2;
canvas.width = window.innerWidth * 2;
let height = canvas.height;
let width = canvas.width;

let particles = [];

for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
}

//particles.forEach(function (particle) {
//    particle.draw(context);
//});

particles.forEach((particle) => {
    particle.draw(context);
});












