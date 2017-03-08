let containerEl = document.querySelector('.container');
containerEl.onmousemove = function (e) {
    
    // top left: -0.5, -0.5
    // bottom right: 0.5, 0.5
    let x = (e.offsetX / this.offsetWidth - 0.5);
    let y = (e.offsetY / this.offsetHeight - 0.5);

    // background image, tilt entire element
    let backgroundCSS = `rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
    let backgroundEl = this.querySelector('.background');
    backgroundEl.style.transform = backgroundCSS;

    // white border, move
    let borderCSS = `translateX(${x * 15}px) translateY(${y * 15}px)`;
    let borderEl = this.querySelector('.border');
    borderEl.style.transform = borderCSS;

    // text, move
    let textCSS = `translateX(${x * 20}px) translateY(${y * 20}px)`;
    this.querySelector('.text').style.transform = textCSS;

    // background gradient, move and rotate
    let gradientCSS = `translateX(${x * 20}px) translateY(${y * 20}px) rotateZ(${x * 2}deg)`;
    let gradientEl = this.querySelector('.gradient');
    gradientEl.style.transform = gradientCSS;
};
