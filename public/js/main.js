let start = document.querySelector("#start")

start.addEventListener("click", play)

function play(){
	console.log("Starting")
	var context = new AudioContext();
	var buffer = context.createBuffer(2, 22050, 44100);
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
		getUserMedia(
			{
						"audio": {
								"mandatory": {
										"googEchoCancellation": "false",
										"googAutoGainControl": "false",
										"googNoiseSuppression": "false",
										"googHighpassFilter": "false"
								},
								"optional": []
						},
				}, gotStream);
		}
	});
}
