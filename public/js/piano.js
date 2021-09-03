var listenBtn = document.querySelector("#listen")

listenBtn.addEventListener("click", listen)

function listen(){
	var audioContext = new AudioContext();
	var buffer = audioContext.createBuffer(2, 22050, 44100);
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
		console.log(state, progress);
		},
		onsuccess: function() {
		var delay = 0; // play one note every quarter second
		var note = 60; // the MIDI note
		var velocity = 127; // how hard the note hits
		// play the note
		MIDI.setVolume(0, 127);
		MIDI.noteOn(0, note, velocity, delay);
		MIDI.noteOff(0, note, delay + 0.75);
		}
	});
}

function frequencyFromNoteNumber( note ) {
	return 440 * Math.pow(2,(note-69)/12);
}

function noteFromPitch( frequency ) {
	var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;
}
