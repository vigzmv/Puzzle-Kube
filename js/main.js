var bigbox = document.getElementById("bigbox");
var boxH = getComputedStyle(bigbox).getPropertyValue("height");
var boxW = getComputedStyle(bigbox).getPropertyValue("width");
boxH = boxH.slice(0,boxH.length - 2);
boxW = boxW.slice(0,boxW.length - 2);

function createSmallBox(noOfBoxes){
	
	var h = boxH - ((noOfBoxes - 1) * 5) - Math.round(0.005*boxH);
	var w = boxW - ((noOfBoxes - 1) * 5) - Math.round(0.005*boxW);

	h = h/noOfBoxes + "px"
	w = w/noOfBoxes + "px"

	for (var i = 0; i < (noOfBoxes*noOfBoxes); i++) {
	var SmallBox = document.createElement("div");

	SmallBox.id = "SmallBox"
	SmallBox.style.height = h;
	SmallBox.style.width = w;
	SmallBox.style.backgroundColor = "red";
	SmallBox.style.float = "left";
	SmallBox.style.borderRadius = "5px"
	SmallBox.style.margin = "2px"

	
	bigbox.appendChild(SmallBox);
	}
}