
// call our pluing:
// $('img').annoyingAudio();

$.fn.annoyingAudio = function () {
    let $element = $(this);
    
    function initAudio() {
        console.log('Initialising Annoying Audio');

        // create <audio> element
        let $audioElement = $('<audio src="test.mp3" autoplay loop="true" style="display: none;"></audio>');
        
        $audioElement[0].volume = 0;
        $('body').append($audioElement);
        
        return $audioElement;
    }
    
    function getManhattanDistance(x1, y1, x2, y2) {
        let distX = x1 - x2;
        let distY = y1 - y2;
        
        // ensure positive values
        distX = Math.abs(distX);
        distY = Math.abs(distY);
        
        return distX + distY;
    }
    
    function onMouseMove(event) {
        let elX = $element.offset().left + ($element.width() / 2);
        let elY = $element.offset().top + ($element.height() / 2);
        
        let distance = getManhattanDistance(event.pageX, event.pageY, elX, elY);
        
        let volume = (distance - 1000) / -1000;
        volume = Math.max(volume, 0); // volume doesn't go lower than 0
        
        console.log(volume);
        $audio[0].volume = volume; // 0 - 1
    }
    
    $('body').mousemove(onMouseMove);
    
    
    let $audio = initAudio();
 
    return this;
}










