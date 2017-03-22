
// Web Audio API

let context = new window.AudioContext();
let oscillator = context.createOscillator();

oscillator.type = 'sine'; // sine | square | triangle | sawtooth
oscillator.frequency.value = 200;

oscillator.connect(context.destination);
oscillator.start();


