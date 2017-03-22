
// call our pluing:
// $('img').annoyingAudio();

$.fn.annoyingAudio = function () {
    let $element = $(this);
    
    console.log('Initialising Annoying Audio');
    
    // create <audio> element
    let $audioElement = $('<audio src="test.mp3" autoplay loop="true" controls="true"></audio>');
    $('body').append($audioElement);
 
    return this;
}
