$.fn.hassleTheHoff = function() {
    const FADE_DISTANCE = 1000;
    
    var $element = $(this);
    let $audioElement;
    
    function getManhattanDistance($element, mouseX, mouseY) {
        let elementCenterX = ($element.offset().left + ($element.width() / 2));
        let elementCenterY = ($element.offset().top + ($element.height() / 2));
        
        let distX = mouseX - elementCenterX;
        let distY = mouseY - elementCenterY;
        
        distX = Math.abs(distX);
        distY = Math.abs(distY);
    
        return distX + distY;
    }
    
    function initAudio() {
        $audioElement = $('<audio src="test.mp3" autoplay loop="true" controls="false">');
        $audioElement[0].volume = 0;
        $('body').append($audioElement);
    }
    
    function onMouseMove(event) {
        distance = getManhattanDistance($element, event.pageX, event.pageY);
        
        distance = Math.min(distance, FADE_DISTANCE);
        let volume = (distance - FADE_DISTANCE) / -FADE_DISTANCE;
        
        $audioElement[0].volume = volume;
        console.log(volume);  
    }

    initAudio();
    $(document).mousemove(onMouseMove);
    
    return this;
};
