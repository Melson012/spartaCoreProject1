$(function(event){
//Counter variable for score
var player1=0;
var player2=0;
var points=0;
var turn=false;
var colors = ["Red","Yellow","Blue","Green","Pink","Purple"];
var randomtext;
var coloText = null;

function random(){
	randomtext=Math.floor(Math.random()*6)
	switch (randomtext){
		case 0:coloText=(colors[randomtext]);
			// console.log(coloText)
	    	break;
	    case 1:coloText=(colors[randomtext]);
	    	// console.log(coloText)
	    	break;
	    case 2: coloText=(colors[randomtext]);
	    	// console.log(coloText)
	    	break;
	    case 3:coloText=(colors[randomtext]);
	    	// console.log(coloText)
	    	break;
	    case 4:coloText=(colors[randomtext]);
	    	// console.log(coloText)
	    	break;
	    case 5: coloText=(colors[randomtext]);
	    	// console.log(coloText)
	    	break;
	}
}

// var $buttAdd = $('.add');
// 		$buttAdd.click(function(event){
// 			addDiv();
// 			})
	
function addDiv(){
	var $div = $('<div class="box"></div>');
	random();
	$div.html(coloText);
	$div.appendTo(".mad");
	$div.addClass('b1');
	$div.addClass('box');
}
//Counter variable for lives
//Component variables
// ---------------------------------------------\\
// ---------------------------------------------\\
function userInput(){
	console.log('userInput')
	$("#usr").keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			var userInput = this.value;
			var $box = $('.box')
			$box.each(function(index,box){
				//console.log($(box).html()==="Yellow" || $(box).html()==="Pink" || $(box).html()==="Green")
				if ($(box).html()===userInput){
		        $(box).detach();
		        recordPoints(points+=1);
						console.log("yes")
				}
			})
	  }
	})
}
// ---------------------------------------------\\
// Record Points
function recordPoints(points){
	if (!turn){
		$('#p1').html(points)
	} else{
		$('#p2').html(points)
	}
}
// ---------------------------------------------\\
// Player 2 Turn
function player2Play(h5,box){
	var $buttonPlay = $('button')
		$buttonPlay.click(function(){
			turn = true;
			points = 0;
			$(h5).removeClass('dissap');
	        $(box).removeClass('dissap');
		})
}
// ---------------------------------------------\\
// Restart
function restartButton(h5,box){
	$('.restart').click(function(event) {
			turn = false;
			points = 0;
			$('#p1').html(points)
			$('#p2').html(points)
			$(h5).removeClass('dissap');
	        $(box).removeClass('dissap');
	})
}
// ---------------------------------------------\\
// Identify whos turn

// ---------------------------------------------\\
//Constructor to create the components 

// ---------------------------------------------\\

// Logic for when the componets hit the botttom of the screen.


// ---------------------------------------------\\
//Function to update the components.

//Function to clear the componet when correctly inputed
//setInterval(addDiv,2000);
userInput();
})