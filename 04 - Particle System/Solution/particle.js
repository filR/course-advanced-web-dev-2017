class Particle {
    
    // set default properties
//    constructor (x = 0, y = 0, radius = 40, color = 'black') {
    constructor ({
        x = 0,
        y = 0,
        radius = 40,
        color = 'black',
        speedX = 5,
        speedY = 2
    } = {}) {
        
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    
    draw (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // draw circle
        context.fillStyle = this.color;
        context.fill();
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
