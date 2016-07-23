$(document).ready(function() {
	


var output;
var counter;

for (counter=0; counter <= 100; counter++) {
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