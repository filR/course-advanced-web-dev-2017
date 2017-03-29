"use strict";

// get canvas
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

// set canvas size
canvas.height = window.innerHeight * 2;
canvas.width = window.innerWidth * 2;

// draw circle
context.beginPath();
context.arc(50, 50, 100, 0, Math.PI * 2);
context.fillStyle = 'pink';
context.fill();
