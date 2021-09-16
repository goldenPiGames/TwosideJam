const FEED_PREFIX = "https://www.newgrounds.com/audio/feed/";
var inputRed, inputBlue, inputGreen, inputYellow, inputStart, inputEnd;

function initFetchUI() {
	inputRed = document.getElementById("InputRed");
}

function fetchMusic() {
	getJSON(FEED_PREFIX+inputRed.value);
	console.log("yuth");
	//getJSON
}

function getJSON(url){
	var httpReq = new XMLHttpRequest(); // a new request
	httpReq.open("GET", url, true);
	httpReq.send(null);
	return httpReq.responseText;          
}