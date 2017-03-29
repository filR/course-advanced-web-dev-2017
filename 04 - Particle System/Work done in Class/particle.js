"use strict";

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        
        this.size = Math.random() * 20 + 5; // 5 - 25
        
        this.speedX = Math.random() * 4 - 2; // -2 +2
        this.speedY = Math.random() * 4 - 2;
        
        let randomColor = Math.random() * 360;
//        this.color = 'hsl(' + randomColor + ', 60%, 80%)';
        this.color = `hsl(${randomColor}, 60%, 80%)`;
    }
    
    draw(context) {
        // draw circle
        context.beginPath();
        
        let currentSize = this.size;
        if (this._isCloseToMouse()) {
            currentSize *= 5;
        }
        context.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        
        if (this._isCloseToMouse()) {
            context.fillStyle = 'black';
        } else {
            context.fillStyle = this.color;
        }
        
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
    
    // are we close to pointer
    _isCloseToMouse() {
        let deltaX = Math.abs(this.x - mouseX);
        let deltaY = Math.abs(this.y - mouseY);
        
        return deltaX < 100 &&
               deltaY < 100;
        
    }
}



















