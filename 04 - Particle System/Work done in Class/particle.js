"use strict";

class Particle {
    constructor() {
        console.log('Particle says: HELLO');
        
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }
    
    draw(context) {
        // draw circle
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, Math.PI * 2);
        context.fillStyle = 'pink';
        context.fill();
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // bounce off walls
        if (this.x >= width ||
            this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y >= height ||
            this.y < 0) {
            this.speedY *= -1;
        }
    }
}





