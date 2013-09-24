// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
var count = 0;
while (count < 21) {
	if ( count % 2 === 0){
		console.log(count + " is even");
	}
	else{
		console.log(count + " is odd.")
	}
		count++;
}

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
for(count = 0; count < 11; count++){
	var num = count * 9
	console.log(count + "* 9 = "+ num );
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
function assignGrade(score){
	if ( score <= 50){
		var grade = "F";
	}
	else if ( score > 50 && score <= 60){
		var grade = "D";
	}
	else if ( score > 60 && score <=70){
		var grade = "C";
	}
	else if ( score > 70 && score <= 80)
		var grade = "B";
	else {
		var grade = "A";
	}
	console.log("For " + score + " you got a " + grade )
}

for(count = 60; count < 101; count++){
	console.log(assignGrade(count));
}

