const colorRedLight = "#ea6262"
const colorRedDark = "#e01f1f"
const colorGreenLight = "#62eaaf"
const colorGreenDark = "#159b62"
const colorBlueLight = "#4db8ff"
const colorBlueDark = "#006bb3"

const bigRedButton = document.querySelector(".big-red-button");
const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const mathTapCounter = document.querySelector(".math-tap-counter");

bigRedButton.addEventListener('mousedown', redButtonTap);
startButton.addEventListener('click', startButtonClick);
resetButton.addEventListener('click', resetButtonClick);

let timer;
let counter = 0;
let running = false;

function redButtonTap() {
	isMultiple();
}

function startButtonClick() {
	if (!running) {
		timer = setInterval(incrementCounter, 1000);
		running = true;
		startButton.textContent = "Stop";
	} else {
		stopButtonClick();
	}
}

function stopButtonClick() {
	clearInterval(timer);
	running = false;
	startButton.textContent = "Start";
}

function resetButtonClick() {
	stopButtonClick();
	counter = 0;
	mathTapCounter.textContent = counter;
	mathTapCounter.style.backgroundColor = "";
	startButton.textContent = "Start";
}

function incrementCounter() {
	counter += 1;
	mathTapCounter.textContent = counter;
	mathTapCounter.style.backgroundColor = "";
}

function isMultiple() {
	if (counter == 0) {
		return;
	}

	let matchPrefersColor = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? true : false;
	if (counter % 3 == 0 && counter % 5 == 0) {
		mathTapCounter.style.backgroundColor = matchPrefersColor ? colorBlueDark : colorBlueLight;
	} else if (counter % 3 == 0) {
		mathTapCounter.style.backgroundColor = matchPrefersColor ? colorGreenDark : colorGreenLight;
	} else if (counter % 5 == 0) {
		mathTapCounter.style.backgroundColor = matchPrefersColor ? colorGreenDark : colorGreenLight;
	} else {
		mathTapCounter.style.backgroundColor = matchPrefersColor ? colorRedDark : colorRedLight;
	}
}
