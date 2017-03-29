"use strict";

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        
        let randomColor = Math.random() * 360;
//        this.color = 'hsl(' + randomColor + ', 60%, 80%)';
        this.color = `hsl(${randomColor}, 60%, 80%)`;
    }
    
    draw(context) {
        // draw circle
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, Math.PI * 2);
        context.fillStyle = this.color;
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
        
        // react to mouse
        if (this._isCloseToMouse()) {
            this.color = 'black';
        }
    }
    
    // are we close to pointer
    _isCloseToMouse() {
        let deltaX = this.x - mouseX;
        let deltaY = this.y - mouseY;
        
        return deltaX < 20 &&
               deltaY < 20;
        
    }
}



















