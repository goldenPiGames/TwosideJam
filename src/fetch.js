const FEED_PREFIX = "https://www.newgrounds.com/audio/feed/";
var inputRed, inputBlue, inputGreen, inputYellow, inputStart, inputEnd;

function initFetchUI() {
	inputRed = document.getElementById("InputRed");
}

function fetchMusic() {
	urlRed = null;
	urlBlue = null;
	urlGreen = null;
	urlYellow = null;
	getJSON(FEED_PREFIX+inputRed.value, dat=>{ urlRed=dat["stream_url"]; checkFetch() });
	getJSON(FEED_PREFIX+inputBlue.value, dat=>{ urlBlue=dat["stream_url"]; checkFetch() });
	//getJSON(FEED_PREFIX+inputRed.value, dat=>{ urlRed=dat["stream_url"]; setMusic() });
	//getJSON(FEED_PREFIX+inputRed.value, dat=>{ urlRed=dat["stream_url"]; setMusic() });
	console.log("yuth");
	//getJSON
}

function getJSON(url, listen) {
	var httpReq = new XMLHttpRequest(); // a new request
	httpReq.addEventListener("load", ret=>listen(JSON.parse(ret)));
	httpReq.open("GET", url, true);
	httpReq.send(null);
}

function checkFetch() {
	if (urlRed && urlBlue)
		setMusic();
}