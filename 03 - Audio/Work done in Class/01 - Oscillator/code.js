
// Web Audio API

let context = new window.AudioContext();
let oscillator = context.createOscillator();

oscillator.connect(context.destination);
oscillator.start();
