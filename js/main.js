$(function(event){
//variables for games
	
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
	var userNAme = null;
	var leaderBoard= [];
	var localCounter = 0;
	var $nice = $('<p>CAN YOU BEAT THIS HIGHSCORE?!</p>')
	$('#playerName').focus()
	$nice.css('color','red')
  $nice.appendTo('.Hscore');
  $('#usr').hide()
	// $nice.hide()
	//store()


	// $("#playerName").keypress(function(event){
	// 		var keycode = (event.keyCode ? event.keyCode : event.which);
	// 		if(keycode == '13'){
	// 			var playerName = (this.value);
	// 			userNAme = playerName.toString()
	// 			$('#p1S').html(userNAme)
	// 			$('.intro').addClass('st')

	// 			start()
	// 			// localCounter+=1;

	// 			store()
	// 		}
	// })
// ---------------------------------------------\\
// Testing:
// var $buttAdd = $('.add');
// 		$buttAdd.click(function(event){
// 				start();
// 			})

	var $pla1 = localStorage.getItem('player')
  var $lostr = $('<tr></tr>');
  $lostr.appendTo('#myTable')
  var $valPl = $('<td></td>')
  $valPl.html($pla1)
  $valPl.appendTo($lostr)

  var $pla1score = localStorage.getItem('score')
  var $scorePl = $('<td></td>')
  $scorePl.html($pla1score)
  $scorePl.appendTo($lostr)
  
  




 
	// ---------------------------------------------\\
	//Introduction/instruction
	function intro(){

		$("#playerName").keypress(function(event){
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '13'){
				var playerName = (this.value);
				userNAme = playerName.toString()
				$('#p1S').html(userNAme)
				$('.intro').addClass('st')
				$('#usr').show()

				start()
				// localCounter+=1;

				store()
			}
		})



		// $('#usr').click(function(event){
		// 	$('.intro').addClass('st')

		// 	start()

		// })
	}
	// ---------------------------------------------\\
	//Running the game
	function start(){
		setInterval(addDiv,3000);
		setInterval(hitBottom,100);
		userInput();
		// restartButton();
		$("#usr").focus();
	 	$("#div1").fadeIn("fast");
    $("#div1").fadeOut(1500);
    $("#div2").fadeIn(2000);
    $("#div2").fadeOut(2000);

		
	}
	// ---------------------------------------------\\
	// Generate blocks
	function addDiv(){
	
		divPos = Math.floor(Math.random()*divPosition.length);
		randomtext=Math.floor(Math.random()*colors.length);
		var $div = $('<div class="box"></div>');
		$div.html(colors[randomtext]);
		$div.appendTo(".mad");
		$div.addClass('b1');
		$div.addClass('box');
		$div.css('left',divPosition[divPos])
		moveDown($div);
		console.log("DIV")
	}
	// ---------------------------------------------\\
	// Animate
	function moveDown(div){

		for(var i=0; i<100; i++){
			$(div).animate({ 'marginTop': "+=20px"});
		}

	}
	// ---------------------------------------------\\
	//Function to clear the componet when correctly inputed
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
		        store()
		        $('#usr').val('');
						console.log("yes")
						
						if(points == 10){
							setInterval(addDiv,2000);
							$('#p2').html("1")
							$('#p2').css('color','green')

						}
						// imlement level 3 rainbow
						if(points >= 20){
							divColors();
							$('#p2').html("2")
							
						}	
						if(points >= 30){
							setInterval(divColors,500);
							$('#p2').html("3")
							$('#p2').css('color','red')
						}else {
							$('.box').css("background-color", "white")
						}

					}else{
						$('#usr').val('');
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
		} else {
			$('#p2').html(points)
			playerTurn()
		}

	}
	// ---------------------------------------------\\
	// Switch Player 2 Turn
	function player2Play(){
		counter ++;

		if (counter % 2 ===0){
				turn = true;
				playerTurn()
				start()

				console.log(turn)
		} else {
				turn = false;
				playerTurn()
				console.log(turn)
				start()
		}

		points = 0;
	}
	// ---------------------------------------------\\
	// Restart
	function restartButton(){

			points = 0;
			lives = 0;
			$('#p1').html(points)
			$('#p2').html(points)
			$('.box').detach()
			if(turn){
				turn = false;
				playerTurn()	
	    }
		
	}
	// ---------------------------------------------\\
	// Change block colors 
	function divColors(){
		var rand = Math.floor(Math.random()*divColor.length); 
		$('.box').css("background-color", divColor[rand])
	}
	// ---------------------------------------------\\
	// Logic for when the componets hit the botttom of the screen.
	function hitBottom(){

		$('.box').each(function(index,div1){
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
	// Identify turns
	function playerTurn(){

		if (!turn){
			$('#p1S').addClass('Turn')
			$('#p2S').removeClass('Turn')
		} else {
			$('#p2S').addClass('Turn')
			$('#p1S').removeClass('Turn')
		}

	}
	// ---------------------------------------------\\
	//Indentify when game is over
	function gameOver(lives){
		
		if (lives == 1) {
	 		$('.heart3').addClass('h1')
	 	} else if (lives == 2) {
	 		$('.heart3').addClass('h1')
	 		$('.heart2').addClass('h1')
	 	} else if (lives == 3){

	 		$('#usr').hide()
	 		$('.heart3').addClass('h1')
	 		$('.heart2').addClass('h1')
	 		$('.heart1').addClass('h1')
	 		$('.box').detach();
	 		//restartButton();
	 		//$('.intro').removeClass('st')
	 		for (var i = 0; i < 6000; i++){
        window.clearInterval(i);
	 		}
	 		if (points < parseInt(localStorage.getItem("score"))){
	 			lost()
	 			
	 		}

	 		if (points >= parseInt(localStorage.getItem("score"))){
	 			won()
	 		}

	 		store()
	 		$('#playerName').focus()
	 		
	 	} 
	}
	// ---------------------------------------------\\
	function lost(){
		var $userLost = $('#div4')
		$userLost.html("Oh No   "+userNAme+": "+points+"  You failed to beat the HIGHSCORE!")
		$("#div4").fadeIn("slow");
    $("#div4").fadeOut(4500);
    setTimeout(function(){
    	$('.intro').removeClass('st')
    	restartButton();
    	location.reload();
    	
    },5500)
   
	}
	function won(){
	var $userLost = $('#div3')
		$userLost.html("Well Done "+userNAme+": "+points+"you Beat the HIGHSCORE")
		$("#div3").fadeIn("slow");
    $("#div3").fadeOut(4500);
    setTimeout(function(){
    	$('.intro').removeClass('st')
    	restartButton();
    	location.reload();
    	
    },5500)	
   
    
	}
	// ---------------------------------------------\\
	// Local Storage
	function store(){
		// var userN = localStorage.getItem("player");

		if (points > localStorage.getItem("score")) {
    		// Store
		    localStorage.setItem("player", userNAme);
		    localStorage.setItem("score", points);
		   	

		    
		 }else {
		 		$nice.remove();
		    console.log("boom")

		}
	}
	// ---------------------------------------------\\
	//Run the program.
	intro();
	
	$('.restart1').hide();
})