$(function(event){
//Counter variable for score
	var player1=0;
	var player2=0;
	var points=0;
	var counter = 0;
	var turn=false;
	var colors = ["Red","Yellow","Blue","Green","Pink","Purple"];
	var divColor = ["#FFE22E","#F29B00","#C6E00F","#F40200","#329BF3","#BEB7A4","#70163C"]
	var randomtext;
	var randomDivColor;
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
// ---------------------------------------------\\
// Testing:
var $buttAdd = $('.add');
		$buttAdd.click(function(event){
			var rand = Math.floor(Math.random()*divColor.length); 
			$('.box').css("background-color", divColor[rand])
			
			})
// ---------------------------------------------\\
function addDiv(){
	var $div = $('<div class="box"></div>');
	random();
	$div.html(coloText);
	$div.appendTo(".mad");
	$div.addClass('b1');
	$div.addClass('box');
	player2Play();
	restartButton();
	moveDown();
}
//Counter variable for lives
//Component variables
// ---------------------------------------------\\
// Animate
function moveDown(){
	for(var i=0; i<100; i++){
					$('.box').animate({ 'marginTop': "+=2px"}, 'slow');
	}
}
// ---------------------------------------------\\
function userInput(){
	console.log('userInput')
	$("#usr").keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			var userInput = this.value;
			var $box = $('.box')
			$box.each(function(index,box){
				if ($(box).html()===userInput){
		        $(box).detach();
		        recordPoints(points+=1);
						console.log("yes")
						if(points > 20){
							divColors()
						}else{
							$('.box').css("background-color", "white")
						}
						
						
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
// Switch Player 2 Turn
function player2Play(){
	var $buttonPlay = $('button')
		$buttonPlay.click(function(){
			counter ++;

			if (counter % 2 ===0){
					turn = true;
			}else {
					turn = false;
			}
			points = 0;
			console.log("play 2")
		})
}
// ---------------------------------------------\\
// Restart
function restartButton(){
	$('.restart').click(function(event) {
			turn = false;
			points = 0;
			$('#p1').html(points)
			$('#p2').html(points)
	    
	})
}
// ---------------------------------------------\\
function divColors(){
	var rand = Math.floor(Math.random()*divColor.length); 
	$('.box').css("background-color", divColor[rand])
	// if(points > 20){
	// 	$(box).css("background-color", divColor[rand])
	// }else { 
	// 	$('.box').css("background-color", "white")
	// }
}
// ---------------------------------------------\\

	
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
//divColors();
})