console.log('Hello World!');

let testSynth = new Tone.Synth().toMaster();
testSynth.triggerAttackRelease("C3", "8n"); // middle c for 8th note
