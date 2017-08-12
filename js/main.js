$(function(event){
//Counter variable for score
//Counter variable for lives
//Component variables
var $box = $('.box')

//Identify input box
$box.each(function(y,box){	
		$('h5').each(function(index,h5){
		var boxValue = $(this).text();
		var eachbox = $box[index];
		userInput(boxValue,h5,eachbox);
		})
	})
// ---------------------------------------------\\
function userInput(bValue,h5,box){
	$("#usr").keypress(function() {
        if (this.value == bValue) {
            console.log("correct!")
            $(h5).addClass('dissap');
            $(box).addClass('dissap');   
        }    
})
}
// ---------------------------------------------\\
//Constructor to create the components 

// ---------------------------------------------\\

// Logic for when the componets hit the botttom of the screen.


// ---------------------------------------------\\
//Function to update the components.

//Function to clear the componet when correctly inputed
})