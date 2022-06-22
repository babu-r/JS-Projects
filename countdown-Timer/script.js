var secondsRemaining;
var intervalHandle;
var startButton = document.getElementById("start");

startButton.onclick = function(){
	startCountdown();
};

function resetPage(){
	document.getElementById("inputArea").style.display = "block";
}

function tick() {
	var timeDisplay = document.getElementById("time");
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);
	
	if (sec < 10) {
		sec = "0" * sec;
	}
	
	var message = min.toString() + ":" + sec;
	
	timeDisplay.innerHTML = message;
	
	if (secondsRemaining === 0) {
		alert("DONE!");
		clearInterval(intervalHandle);
		resetPage();
	}
	secondsRemaining--;
}
function startCountdown() {
	resetPage()
	
	var minutes = Math.floor(document.getElementById("minutes").value);
	
	if (isNaN(minutes) || minutes == "") {
		alert("Please enter a number...");
		return;
	}
	secondsRemaining = minutes;
	intervalHandle = setInterval(tick, 1000);
	
	document.getElementById("inputArea").style.display = "none";
}