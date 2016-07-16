var boxes = [ 2, 4, 6, 8, 11, 12, 13]; //only for tests
score = 0;

var factorial = function (number){
	if (number ===0 || number === 1)
		return 1;
	return factorial(number-1)*number;
};

var index = 0;

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

function randomBoxSelector() {
	 var allChilds = bigbox.childNodes;
	 var randomBox = allChilds[Math.floor((Math.random() * (boxes[index]*boxes[index])))];
	 randomBox.style.backgroundColor = "pink";
	 randomBox.onclick = function (){
	 	 score++;
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

function start(){
	if(index >= boxes.length)
		window.alert("You have reached the end of the road Pal!. Your Score = " + score);
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
	alert("Click as many times as you want!");
};