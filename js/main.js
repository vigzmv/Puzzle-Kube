var boxes = [ 2, 2,
			  3, 3,
			  4, 4,
			  5, 5, 5,
			  6, 6, 6, 6, 6,
			  7, 7, 7, 7, 7, 7, 7,
			  8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
			  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
		      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
		      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 
		      11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
		      ];


var colrs = ["#b71c1c", "#006064", "#C51162", "#F50057", "#6A1B9A",
  "#880E4F", "#673AB7", "#303F9F", "#0D47A1", "#607D8B", "#2E7D32",
  "#00695C", "#01579B", "#FF6F00", "#424242", "#FF5722", "#BF360C",
  "#795548", "#E65100", "#6200EA", "#9C27B0", "#9E9D24", "#263238",
  "#d50000", "#0D47A1", "#4A148C", "#3E2723", "#00695C", "#827717",

  			 "#b71c1c", "#006064", "#C51162", "#F50057", "#6A1B9A",
  "#880E4F", "#673AB7", "#303F9F", "#0D47A1", "#607D8B", "#2E7D32",
  "#00695C", "#01579B", "#FF6F00", "#424242", "#FF5722", "#BF360C",
  "#795548", "#E65100", "#6200EA", "#9C27B0", "#9E9D24", "#263238",
  "#d50000", "#0D47A1", "#4A148C", "#3E2723", "#00695C", "#827717"]; 


var score = 0;
var seconds;
var temp;
var randomBox;
var col;
var box_no;
var name;
var opacy = 0.77;

var index = 0;
var help = false;

var bigbox = document.getElementById("bigbox");
var boxH = getComputedStyle(bigbox).getPropertyValue("height");

var bigBox;
var gameOver = false;
var submitting = false;
var thanking = false;

var bigBoxSize = boxH.slice(0,boxH.length - 2);

function createSmallBox(total_extra_space, no_of_box){

	var boxH = getComputedStyle(bigbox).getPropertyValue("height");

	var bigBoxSize = boxH.slice(0,boxH.length - 2);
	
	var h = bigBoxSize - total_extra_space;

	console.log(h);

	H = h/no_of_box + "px";
	h = h/no_of_box;
	w = h + 0.04 * no_of_box + "px"
	var SmallBox = document.createElement("div");

	SmallBox.className = "SmallBox";
	SmallBox.style.backgroundColor = col;
	SmallBox.style.height = H;
	SmallBox.style.width = w;	
	SmallBox.style.float = 'left';
	bigbox.appendChild(SmallBox);
}


function scoreUpdater () {
	 ScoreDiv = document.getElementById("score");
	 ScoreDiv.innerHTML = "Score: " + score;
}

function randomBoxSelector(known_no) {
	 var allChilds = bigbox.childNodes;
	 box_no = known_no || Math.floor((Math.random() * (boxes[index]*boxes[index])));
	 randomBox = allChilds[box_no];
	 randomBox.style.opacity = opacy;
	 
	 if(index % 2 == 0)
		{	 
			opacy = opacy + 0.004;	
		}

		 randomBox.onclick = function (){
	 	 if(index == 1){
	 	 	document.getElementById('countdown').innerHTML = 60 + 1;
	 	 	 //Set the time here.
	 	 	countdown();
	 	 }
	 	 score++;
	 	 scoreUpdater();
	 	 start(); 
	 }
}

function create(){
	col = colrs[Math.floor((Math.random() * (colrs.length)))];
	for(var i=0; i<boxes[index]*boxes[index]; i++){
		var extra_spaces = 5 * boxes[index];
		createSmallBox(extra_spaces, boxes[index]);
	}
	randomBoxSelector();
}

function checkName () {
	if (name != undefined && name != '' && name != 'undefined')
		$('.name-input').val(name);
}

var submitScore = function () {
	submitting = true;
	$('#bigbox').html('');
	var form = '<div class="form">';
	form += '<img class="avatar" src="https://api.adorable.io/avatars/129/Kube.png">';
	form += '<div class="your-name"><input class="name-input" type="text" placeholder="Your Name"/></div>';
	form += '<div class="name-score">Score: ' + score +'</div>';
	form += '<div class="name-submit btn">Submit</div>';
	form += '<div class="name-back btn">Back</div>';

	$('#bigbox').html(form);

	checkName();

	if ($('name-input').val() != "" && $('.name-input').val() != " "){
		var url = "https://api.adorable.io/avatars/129/" + $('.name-input').val() + ".png";
		$('.avatar').attr({'src': url});
	}

	var boxH = getComputedStyle(bigbox).getPropertyValue("height");

	var bigBoxSize = boxH.slice(0,boxH.length - 2);

	$('.avatar').css('width', '20%');
	$('.avatar').css('height', 'auto');

	$('.name-input').bind('keyup', function () {
		var url = "https://api.adorable.io/avatars/129/" + $('.name-input').val() + ".png";
		$('.avatar').attr({'src': url});
	});

	$('.name-submit').click(function () {
		name = $('.name-input').val();
		submit();
		submitting = false;
		thanking = true;
		postSubmit();
	});

	$('.name-back').click(function () {
		countdown(1);
	});

};

function scoreplay () {
	 var bigBoxSize = getComputedStyle(bigbox).getPropertyValue("height").slice(0,boxH.length - 2);
	 bigbox.style.backgroundColor = "black";
	 bigbox.style.fontSize = bigBoxSize * 0.13 + "px";
	 bigbox.style.color = "white";
	 bigbox.style.textAlign = "center";
	 bigbox.style.fontFamily = "'Passion One', cursive, sans-serif";

	 bigbox.innerHTML = "</br></br>Your Score: " + score;

	 bigbox.innerHTML = bigbox.innerHTML + "</br><div id='submit-score'> Submit Score </div></br> <div id='replay'>Tap to Replay</div>";

	 $('#submit-score').click( function () {
	 	submitScore();
	 });

	 $('#replay').click( function () {
	 	 location.reload();
	 });
	 
}
 
function countdown(second) {
	seconds = document.getElementById('countdown').innerHTML;
	seconds = second || parseInt(seconds, 10);

	if (seconds == 1) {
		temp = document.getElementById('countdown');
		temp.innerHTML = "Game Over";
		randomBox.style.backgroundColor = "black";
		randomBox.onclick = null;
		scoreplay();
		// window.alert("Your Score = " + score);
	}

	seconds--;
    if (seconds === 0){
        var game_over = document.getElementById("game_over");
        gameOver = true;
        game_over.play();
    }
    else{
		var tick = document.getElementById('tick');
		volume = Math.max((60 - seconds) / 60, 0.5);
		tick.volume = (volume <= 1)? volume : 1;
		tick.play();
		temp = document.getElementById('countdown');
		temp.innerHTML = seconds;
		timeoutMyOswego = setTimeout(countdown, 1000);
	}
} 

function start(){
	if(index >= boxes.length)
		window.alert("Either you found a hack or you are GOD. Your Score = " + score);
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
};


window.onresize = function () {
	if (gameOver){
		if (!submitting){
			if(thanking){
				postSubmit();
			}
			else{
				countdown(1);
			}
		}
		else{
			submitScore();
		}
	}
	else{
		bigBox = document.getElementById('bigbox');
		while(bigBox.firstChild){
			bigBox.removeChild(bigBox.firstChild);
		}
		for(var i=0; i<boxes[index]*boxes[index]; i++){
			var extra_spaces = 5 * boxes[index];
			createSmallBox(extra_spaces, boxes[index]);
		}
		randomBoxSelector(box_no);
	}
};


var populate_help = function () {
	var help_obj = document.getElementById("help");
	var help_obj_div = document.createElement('div');
	help_obj_div.id = "help-text";

	help_obj_text = "<p>Society is always hard on the odd ones and so is this game. Seperate as many odd boxes from the matrix as you can while the Timer is still ticking.</p>"+
					"<p>Try to differentiate as fast as you can to check your reflexes and sense of judgement.</p>" +
					"<p>By: vigzmv </p>";

	help_obj_div.innerHTML += help_obj_text;

	help_obj.appendChild(help_obj_div);
};


var help_height = $("#help").height();
var help_width = $("#help").width();

$("#help").click(function () {
	if (!help){
		$("#help").animate({
			height: "240px",
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

var leaderboard;
var displaying = false;
var point_height = $("#leaderboard").height();
var point_width = $("#leaderboard").width();

function populatePoints () {
	var frame = document.getElementById('leaderboard');
	var table = document.createElement('table');
	table.id = "points-table";
	var tableHeaders = document.createElement('thead');
	tableHeaders.id = "table-header";
	var headers = '<tr><th></th><th>Player</th><th>Score</th></tr>';

	tableHeaders.innerHTML += headers;
	var tableBody = document.createElement('tbody');
	tableBody.id = "table-body";
	var bodyContent = '';
	for (var i=1; i <= leaderboard.length; i++){
		bodyContent += '<tr id="player' + i + '">';
		bodyContent += '<td>' + i +'</td>';
		bodyContent += '<td>' + leaderboard[i - 1]['name'] + '</td>';
		bodyContent += '<td>' + leaderboard[i - 1]['score'] + '</td>';
		bodyContent += '</tr>';
	}
	tableBody.innerHTML += bodyContent;
	table.appendChild(tableHeaders);
	table.appendChild(tableBody);

	frame.appendChild(table);
}

function maintainConsistency () {
	leaderboard = undefined;
}

$("#leaderboard").click(function () {
	if (leaderboard == undefined){
        setInterval(function () { maintainConsistency(); }, 10*60*1000);
		$.ajax({
            url: "http://kube-server.herokuapp.com/api/v1/score/",
            type: "GET",
            async: false,
            crossDomain: true,
            dataType: "json",
            success: function (response) {
            	console.log('calling api...');
                leaderboard = response;
				console.log(leaderboard);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
	}

	if (!displaying){
		var suffix = (window.innerHeight > window.innerWidth)? "vh": "vw";
		$("#leaderboard").animate({
			height: "40"+suffix,
			width: "25"+suffix
		}, 500);
		populatePoints();
		displaying = true;
	}
	else{
		$("#points-table").remove();
		$('#leaderboard').animate({
			height: ""+point_height+"px",
			width: ""+point_width+"px"
		}, 500);
		displaying = false;
	}
});

// var submit  = function () {
// 	if (name == '')
// 		name = "Anonymous";
// 	$.ajax({
//             url: "http://kube-server.herokuapp.com/api/v1/score/",
//             type: "POST",
//             async: true,
//             crossDomain: true,
//             withCredentials: true,
//             dataType: "json",
//             data: {"name":name , "score": score},
//             success: function (response) {
//             	console.log('Score Submitted....');
//             	console.log(response);
//             },
//             error: function (xhr, status) {
//                 alert("Check your Internet Connection.");
//             }
//         });
// };

var postSubmit = function () {
	$('#bigbox').html('');
	var thanks = '<div class="thanks">Thank You <br /> <br/>Tap to Replay</div>';
	$('#bigbox').html(thanks);
	$('.thanks').click(function () {
		location.reload();
	});
};
