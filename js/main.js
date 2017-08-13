$(function(event){
//Counter variable for score
var player1=0;
var player2=0;
var points=0;
var turn=false;

var $p1Turn = $('.player1')
var $p2Turn = $('.player2')

var $scoreplayer2 = $('#p2').text()
var $scoreplayer1 = $('#p1').text()



//Counter variable for lives
//Component variables
var $box = $('.box')
//Identify input box
$box.each(function(y,box){	
		$('h5').each(function(index,h5){
		var boxValue = $(this).text();
		var eachbox = $box[index];
		userInput(boxValue,h5,eachbox);
		player2Play(h5,box);
		restartButton(h5,box);
		})
})
// ---------------------------------------------\\
// ---------------------------------------------\\
function userInput(bValue,h5,box){
	$("#usr").keypress(function() { 
        if (this.value == bValue) {
            console.log("correct!")
            $(h5).addClass('dissap');
            $(box).addClass('dissap');
            recordPoints(points+=1); 

        } 

	})
}
// ---------------------------------------------\\
// Record Points
function recordPoints(points){
	//var $score = $('p').text()
	
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
			turn = true
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
})