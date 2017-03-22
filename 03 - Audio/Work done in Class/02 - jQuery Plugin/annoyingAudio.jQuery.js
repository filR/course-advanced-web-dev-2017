
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
        
        return distX + distY;
    }
    
    function onMouseMove(event) {
        let elX = $element.offset().left;
        let elY = $element.offset().top;
        
        let distance = getManhattanDistance(event.pageX, event.pageY, elX, elY);
        
        console.log(distance);
        
        $audio[0].volume = 0;
    }
    
    $('body').mousemove(onMouseMove);
    
    
    let $audio = initAudio();
 
    return this;
}










