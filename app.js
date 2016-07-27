$(document).ready(function() {
	


var output;
var counter;

var input = prompt("To what number should i count?");
var output = parseInt(input);
for (counter=0; counter <= output; counter++) {
	if (counter%3==0 && counter%5==0) {
		$(".list").append (
			'<li>' + 'fizzbuzz' +'</li>'
		);
		console.log("fizzbuzz");
	}
	
	else if (counter%3===0) {
		$(".list").append (
			'<li>' + 'fizz' +'</li>'
		);		
		console.log("fizz");
	}
	
	else if (counter%5===0) {
		$(".list").append (
			'<li>' + 'buzz' +'</li>'
		);
		console.log("buzz");
	}
	
else {
	$(".list").append (
			'<li>' + counter +'</li>'
		);
	console.log(counter);
	}
}

});