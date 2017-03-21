// test tone.js
//let testSynth = new Tone.Synth().toMaster();
//testSynth.triggerAttackRelease("C4", "8n"); // middle C for an 8th note


// simple synth
//let synth = new Tone.AMSynth().toMaster();

// synth with options
let synth = new Tone.Synth({
    "oscillator": {
        "type": "square"
    },
    "envelope": {
        "attack": 0.01,
        "decay": 0.2,
        "sustain": 0.2,
        "release": 0.2
    }
}).toMaster();


// poly synth
//let synth = new Tone.PolySynth(6, Tone.Synth, {
//    "oscillator" : {
//        "partials" : [0, 2, 3, 4],
//    }
//}).toMaster();
// needs `synth.triggerRelease(this.id);`


// play on button click
document.querySelectorAll('.notes button').forEach(function(button){

    button.addEventListener('mousedown', function(e){
		synth.triggerAttack(this.id);
	});
	
    button.addEventListener('mouseup', function(e){
		synth.triggerRelease();
	});
});

// play "number" buttons on click
document.querySelectorAll('.numbers button').forEach(function(button){

    button.addEventListener('mousedown', function(e){
        let note = Tone.Frequency(this.id, "midi").toNote()
		synth.triggerAttack(note);
	});
	
    button.addEventListener('mouseup', function(e){
		synth.triggerRelease();
	});
});
