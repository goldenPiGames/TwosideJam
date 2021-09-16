const FEED_PREFIX = "https://www.newgrounds.com/audio/feed/";
var inputRed, inputBlue, inputGreen, inputYellow, inputStart, inputEnd;

function initFetchUI() {
	inputRed = document.getElementById("InputRed");
	inputBlue = document.getElementById("InputBlue");
	inputGreen = document.getElementById("InputGreen");
	inputYellow = document.getElementById("InputYellow");
}

function fetchMusic() {
	urlRed = null;
	urlBlue = null;
	urlGreen = null;
	urlYellow = null;
	getJSON(FEED_PREFIX+inputRed.value, dat=>{ urlRed=dat["stream_url"]; checkFetch() });
	getJSON(FEED_PREFIX+inputBlue.value, dat=>{ urlBlue=dat["stream_url"]; checkFetch() });
	//if (inputGreen.value)
	//	getJSON(FEED_PREFIX+inputRed.value, dat=>{ urlRed=dat["stream_url"]; setMusic() });
	//if (inputYellow.value)
	//	getJSON(FEED_PREFIX+inputRed.value, dat=>{ urlRed=dat["stream_url"]; setMusic() });
	console.log("yuth");
	//getJSON
}

function getJSON(url, listen) {
	var httpReq = new XMLHttpRequest(); // a new request
	httpReq.addEventListener("load", evie=>{
		listen(JSON.parse(httpReq.response))
	});
	httpReq.open("GET", url, true);
	httpReq.send(null);
}

function checkFetch() {
	if (urlRed && urlBlue)
		setMusic();
}