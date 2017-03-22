console.log('Hello World!');

let testSynth = new Tone.Synth({
	"oscillator" : {
		"type" : "pwm",
		"modulationFrequency" : 0.2
	},
	"envelope" : {
		"attack" : 0.02,
		"decay" : 0.1,
		"sustain" : 0.2,
		"release" : 0.9,
	}
}).toMaster();
//testSynth.triggerAttackRelease("C3", "8n"); // middle c for 8th note

// polysynth
//let testSynth = new Tone.PolySynth(6, Tone.Synth, {
//    "oscillator": {
//        "partials": [0, 2, 3, 4]
//    }
//}).toMaster();



// play "note" buttons
document.querySelectorAll('.notes button').forEach(function (button) {
    
    button.onmousedown = function (event) {
        let note = this.id;
        testSynth.triggerAttack(note);
    };
    
    button.onmouseup = function (event) {
        testSynth.triggerRelease();
    };
    
});

// play "number" buttons
document.querySelectorAll('.numbers button').forEach(function (button) {
    
    button.onmouseenter = function (event) {
        let note = Tone.Frequency(this.id, "midi").toNote();
        testSynth.triggerAttack(note);
    };
    
    button.onmouseleave = function (event) {
        testSynth.triggerRelease();
    };
    
});






