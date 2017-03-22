console.log('Hello World!');

let testSynth = new Tone.Synth().toMaster();
testSynth.triggerAttackRelease("C3", "8n"); // middle c for 8th note


document.querySelectorAll('.notes button').forEach(function (button) {
    
    button.onmousedown = function (event) {
        let note = this.id;
        testSynth.triggerAttack(note);
    };
    
    button.onmouseup = function (event) {
        testSynth.triggerRelease();
    };
    
});

