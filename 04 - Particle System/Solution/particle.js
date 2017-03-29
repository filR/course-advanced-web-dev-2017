class Particle {
    
    // set default properties
//    constructor (x = 0, y = 0, radius = 40, color = 'black') {
    constructor ({
        x = 0,
        y = 0,
        radius = 40,
        color = 'black',
        speedX = 0,
        speedY = 0
    } = {}) {
        
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    
    get position() {
        return {
            x: this.x,
            y: this.y
        }
    }
    
    draw (context) {
//        context.beginPath();
//        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // draw circle
//        context.fillStyle = this.color;
//        context.fill();
        
        let size = this.radius;
        if (this.isCloseToMouse()) {
            size *= 5;
        }
        
        context.drawImage(image, this.x - size / 2, this.y - size / 2, size, size);
    }
    
    isCloseToMouse() {
        const TOLERANCE = 50;
        
        return this.x > mouseX - TOLERANCE &&
            this.x < mouseX + TOLERANCE &&
            this.y > mouseY - TOLERANCE &&
            this.y < mouseY + TOLERANCE;
    }
    
    update () {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // wall collisions
        if (this.x < 0 || this.x > width) {
            this.speedX *= -1;
        }
        
        if (this.y < 0 || this.y > height) {
            this.speedY *= -1;
        }
    }
}
