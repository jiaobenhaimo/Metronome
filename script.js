let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let bar = 0;
let beat = 0;
const startTime = 1695646260000
const bpm = 60

const date = new Date(startTime);
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const hours = ("0" + date.getHours()).slice(-2);
const minutes = ("0" + date.getMinutes()).slice(-2);
const seconds = ("0" + date.getSeconds()).slice(-2);
const kinddString = "Starting from " + year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;

stopWatch()

function stopWatch() {
		count = Math.floor((Date.now()-startTime)/1000)
	if (count>=-2){
		kindaString="Bar"
		kindbString="Beat"
		kindcString=""
		count = Math.floor((Date.now()-startTime)/1000)+2
		beat=count%3+1
		bar=(count-count%3)/3
	} 
	else if(count>-30){
		kindaString="Bar"
		kindbString="Beat"
		kindcString="Left"
		count = -Math.floor((Date.now()-startTime)/1000)
		beat=3-count%3
		bar=(count-count%3)/3
	}
	else{
		kindaString=""
		kindbString="Minutes"
		kindcString="Seconds Left"
		count = -Math.floor((Date.now()-startTime)/1000)
		beat=count%60
		bar=count-count%60
	}
	let barString = bar;
	let beatString = beat;
	document.getElementById('bar').innerHTML = barString;
	document.getElementById('beat').innerHTML = beatString;
	document.getElementById('kinda').innerHTML = kindaString;
	document.getElementById('kindb').innerHTML = kindbString;
	document.getElementById('kindc').innerHTML = kindcString;
	document.getElementById('kindd').innerHTML = kinddString;
	setTimeout(stopWatch, 10);
}