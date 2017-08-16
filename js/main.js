$(function(event){
//Counter variable for score
	var player1=0;
	var player2=0;
	var points=0;
	var lives = 0;
	var counter = 0;
	var turn=false;
	var colors = ["RED","YELLOW","BLUE","GREEN","PINK","PURPLE","BROWN","BLACK","ORANGE","WHITE","GREY"];
	var divColor = ["#FFE22E","#F29B00","#C6E00F","#F40200","#329BF3","#BEB7A4","#70163C"]
	var divPosition = ["10%","20%","30%","40%","50%","70%",]
	var randomtext;
	var randomDivColor;
	var coloText = null;
	var divpixel = null;


// ---------------------------------------------\\
// Testing:
// var $buttAdd = $('.add');
// 		$buttAdd.click(function(event){
// 				start();
// 			})
// ---------------------------------------------\\
function intro(){
	$('.body').click(function(event){
		$('.intro').addClass('st')
		start()
		

	})
}
// ---------------------------------------------\\
function start(){
	setInterval(addDiv,3000);
	setInterval(hitBottom,100);
	userInput();
}
// ---------------------------------------------\\
function addDiv(){
	divPos = Math.floor(Math.random()*divPosition.length);
	randomtext=Math.floor(Math.random()*colors.length);
	var $div = $('<div class="box"></div>');
	$div.html(colors[randomtext]);
	$div.appendTo(".mad");
	$div.addClass('b1');
	$div.addClass('box');
	$div.css('left',divPosition[divPos])
	player2Play();
	restartButton();
	moveDown($div);
	
}
//Counter variable for lives
//Component variables
// ---------------------------------------------\\
// Animate
function moveDown(div){
	for(var i=0; i<100; i++){
				$(div).animate({ 'marginTop': "+=20px"});
				
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
				if ($(box).html()===(userInput.toUpperCase())){
		        $(box).detach();
		        recordPoints(points+=1);
		        $('#usr').val('');
						console.log("yes")
						if(points > 20){
							divColors();
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
		playerTurn()
		
	} else{
		$('#p2').html(points)
		playerTurn()

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
					playerTurn()
					console.log(turn)
			}else {
					turn = false;
					playerTurn()
					console.log(turn)
			}
			points = 0;
			
		})
}
// ---------------------------------------------\\
// Restart
function restartButton(){
	$('.buttp2').click(function(event) {
		points = 0;
		$('#p1').html(points)
		$('#p2').html(points)
		if(turn){
			turn = false;
			playerTurn()
			
			
    }else{
    	turn = true;
    	playerTurn()
    	
    }


	})
}
// ---------------------------------------------\\
function divColors(){
	var rand = Math.floor(Math.random()*divColor.length); 
	$('.box').css("background-color", divColor[rand])
}
// ---------------------------------------------\\
// Logic for when the componets hit the botttom of the screen.
function hitBottom(){
	
	$('.box').each(function(index,div1){
		//console.log("HELOO");
		var offsets = $(div1).offset();
		var top = offsets.top;
		var left = offsets.left;
		var bottom = $('.back').height() - top ;
		console.log(bottom);
		if (bottom < -5){
		 	$(div1).css("background-color", "blue")
		 	$(div1).detach();
		 	gameOver(lives+=1);
	 }
	})
}
// ---------------------------------------------\\
// Identify whos turn
function playerTurn(){
	if (!turn){
		$('#p1S').addClass('Turn')
		$('#p2S').removeClass('Turn')
	} else{
		$('#p2S').addClass('Turn')
		$('#p1S').removeClass('Turn')
	}
}
// ---------------------------------------------\\
function gameOver(lives){
	if (lives == 1) {
		 		$('.heart3').addClass('h1')
		 	}else if (lives == 2) {
		 		$('.heart3').addClass('h1')
		 		$('.heart2').addClass('h1')
		 	}else if (lives == 3){
		 		$('.heart3').addClass('h1')
		 		$('.heart2').addClass('h1')
		 		$('.heart1').addClass('h1')
		 	}else if (lives == 4) {
		 		$('.box').detach();
		 		window.clearInterval();
		 		$('.back').html("GAME OVER!\nPlayer 1:");
		 		location.reload();
		 		
		 		
		 	}
}

// ---------------------------------------------\\
//Function to update the components.

//Function to clear the componet when correctly inputed
intro();
//divColors();
})