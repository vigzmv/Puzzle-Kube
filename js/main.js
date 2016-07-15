var bigbox = document.getElementById("bigbox");
var boxH = getComputedStyle(bigbox).getPropertyValue("height");
var boxW = getComputedStyle(bigbox).getPropertyValue("width");
boxH = boxH.slice(0,boxH.length - 2);
boxW = boxW.slice(0,boxW.length - 2);

function createSmallBox(){
	
	var h = boxH - 20;
	var w = boxW - 20;

	h = h/3 + "px"
	w = w/3 + "px"

	var SmallBox = document.createElement("div");

	SmallBox.id = "SmallBox"
	SmallBox.style.height = h;
	SmallBox.style.width = w;
	SmallBox.style.backgroundColor = "red";
	SmallBox.style.float = "left";
	SmallBox.style.borderRadius = "5px"
	SmallBox.style.margin = "3px"	
	bigbox.appendChild(SmallBox);
}