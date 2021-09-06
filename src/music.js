var urlRed, urlBlue, urlGreen, urlYellow, loopStart, loopEnd;

const SIDE_NAMES = [
	"Red",
	"Blue",
	"Green",
	"Yellow"
]

const RED = 0;
const BLUE = 1;
const GREEN = 2;
const YELLOW = 3;

//this.particles.push(new MusicInfoBar(name));
const MUSIC_MAX_VARS = 2;
var music;
var musicElems;
var songVar = 0;

function initMusic() {
	musicElems = [];
	for (var i = 0; i < SIDE_NAMES.length; i++) {
		musicElems[i] = document.getElementById("Music"+SIDE_NAMES[i]);
	}
	music = musicElems[0];
	setMusicShuffle(loopStart || loopEnd);
	//setMusicShuffle(jukeboxSpecs.shuffle);
	positionDisplay = document.getElementById("PositionDisplay");
	positionSlider = document.getElementById("PositionSlider");
	positionSlider.oninput = function() {
		setMusicPositionPortion(this.value);
	}
	setInterval(musicLoopCheck, 40);
}

function setMusic() {
	musicElems[RED].src = urlRed;
	musicElems[BLUE].src = urlBlue;
	musicElems[GREEN].src = urlGreen;
	document.getElementById("ButtonSideGreen").hidden = !urlGreen;
	musicElems[YELLOW].src = urlYellow;
	document.getElementById("ButtonSideYellow").hidden = !urlYellow;
	switchSide(0);
	music.play();
}

function switchSide(a) {
	if (a != songVar) {
		songVar = a;
		let musicOld = music;
		let musicNew = musicElems[songVar];
		music = musicNew;
		musicNew.currentTime = musicOld.currentTime;
		musicOld.pause();
		musicNew.play();
	}
}

function togglePause() {
	if (music.paused)
		music.play();
	else
		music.pause();
}

function setMusicShuffle(val) {
	if (val) {
		musicElems.forEach(m => m.loop = false);
	} else {
		musicElems.forEach(m => m.loop = true);
	}
}

function getMusicPosition() {
	return music.currentTime.toFixed(2);
}

function setMusicPosition(tim) {
	if (tim == tim)
		music.currentTime = tim;
}

function setMusicPositionPortion(por) {
	console.log(por)
	setMusicPosition(por * (loopEnd || music.duration));
}

function musicLoopCheck() {
	if (loopEnd && music.currentTime >= loopEnd) {
		let d = loopEnd - loopStart;
		music.currentTime -= d;
	}
	positionDisplay.innerHTML = getMusicPosition();
	setSliderValue(music.currentTime / (loopEnd || music.duration));
}

function setSliderValue(val) {
	positionSlider.value = val;
}

var musicWasPlaying = true;