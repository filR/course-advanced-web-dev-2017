"use strict";

class Particle {
    constructor() {
        console.log('Particle says: HELLO');
        
        this.x = Math.random() * width;
        this.y = Math.random() * height;
    }
    
    draw(context) {
        // draw circle
        context.beginPath();
        context.arc(this.x, this.y, 100, 0, Math.PI * 2);
        context.fillStyle = 'pink';
        context.fill();
    }
    
    update() {
        
    }
}

