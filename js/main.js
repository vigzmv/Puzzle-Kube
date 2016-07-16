var boxes = [ 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7,
 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, ]; //only for tests
var score = 0;
var seconds;
var temp;
var randomBox //it has to global for reasons

var factorial = function (number){
	if (number ===0 || number === 1)
		return 1;
	return factorial(number-1)*number;
};

var index = 0;
var help = false;

var bigbox = document.getElementById("bigbox");
var boxH = getComputedStyle(bigbox).getPropertyValue("height");

var max_size = factorial(Math.max(...boxes));
var bigBoxSize = boxH.slice(0,boxH.length - 2);

function createSmallBox(total_extra_space, no_of_box){
	
	var h = bigBoxSize - total_extra_space;

	console.log(h);

	h = h/no_of_box + "px";

	var SmallBox = document.createElement("div");

	SmallBox.id = "SmallBox"
	SmallBox.style.height = h;
	SmallBox.style.width = h;	
	bigbox.appendChild(SmallBox);
}

function scoreUpdater () {
	 ScoreDiv = document.getElementById("score");
	 ScoreDiv.innerHTML = "Score: " + score;
}

function randomBoxSelector() {
	 var allChilds = bigbox.childNodes;
	 randomBox = allChilds[Math.floor((Math.random() * (boxes[index]*boxes[index])))];
	 randomBox.style.backgroundColor = "pink";
	 randomBox.onclick = function (){
	 	 if(index == 1){
	 	 	document.getElementById('countdown').innerHTML = 10 + 1; //Set the time here.
	 	 	//
	 	 	countdown();
	 	 }
	 	 score++;
	 	 scoreUpdater();
	 	 start(); 
	 }
}

function create(){
	for(var i=0; i<boxes[index]*boxes[index]; i++){
		var extra_spaces = 6 * boxes[index];
		createSmallBox(extra_spaces, boxes[index]);
	}
	randomBoxSelector();
}
 
function countdown() {
	seconds = document.getElementById('countdown').innerHTML;
	seconds = parseInt(seconds, 10);

	if (seconds == 1) {
		temp = document.getElementById('countdown');
		temp.innerHTML = "Game Over";
		randomBox.onclick = null;
		window.alert("Your Score = " + score);
		return;
	}

	seconds--;
	var tick = document.getElementById('tick');
	tick.volume = (10 - seconds) / 10;
	tick.play();
	temp = document.getElementById('countdown');
	temp.innerHTML = seconds;
	timeoutMyOswego = setTimeout(countdown, 1000);
} 

function start(){
	if(index >= boxes.length)
		window.alert("You have reached the end of the road Pal!. Your Score = " + score);
		//This won't happen. let the player have no limits
	else{
		var bigBox = document.getElementById('bigbox');
		while(bigBox.firstChild){
			bigBox.removeChild(bigBox.firstChild);
		}
		create();
		index++;
	}
}

window.onload = function () {
	start();
	alert("Click the Sneaky Litle Rebel");
};

var populate_help = function () {
	var help_obj = document.getElementById("help");
	var help_obj_div = document.createElement('div');
	help_obj_div.id = "help-text";

	help_obj_text = "<p>Society is always hard on the odd ones and so is this game. Seperate as many odd boxes from the matrix as you can while the Timer is still ticking.</p>"+
					"<p>Try to differentiate as fast as you can to check your reflexes and sense of judgement.</p>";

	help_obj_div.innerHTML += help_obj_text;

	help_obj.appendChild(help_obj_div);
};

var help_height = $("#help").height();
var help_width = $("#help").width();

$("#help").click(function () {
	if (!help){
		$("#help").animate({
			height: "200px",
			width: "300px"
		}, 500);
		populate_help();
		help = true;
	}
	else{
		$("#help-text").remove();
		$('#help').animate({
			height: ""+help_height+"px",
			width: ""+help_width+"px"
		}, 500);
		help = false;
	}
});