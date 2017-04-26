
// get path element
let path = document.querySelector('path');

// get path length
let pathLength = path.getTotalLength();

// set path array CSS property
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// offset the dashes to hide completely
path.style.strokeDashoffset = pathLength;


// when the page is scrolled
window.addEventListener('scroll', function (event) {
    
    // what % down is it
    let scrollDistance = window.pageYOffset;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // how much to show
    let scrollPercentage = scrollDistance / scrollHeight;
    let drawLength = scrollPercentage * pathLength;
    
    // draw path
    path.style.strokeDashoffset = pathLength - drawLength;
});