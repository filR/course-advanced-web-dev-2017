
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
    
    function onMouseMove(event) {
        console.log(event.pageX, event.pageY);
        console.log($element.offset());
        
        $audio[0].volume = 0;
    }
    
    $('body').mousemove(onMouseMove);
    
    
    let $audio = initAudio();
 
    return this;
}
