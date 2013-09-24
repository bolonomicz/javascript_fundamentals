// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x,y){
	if( x > y)
		{var num = x; }
	else 
		{var num = y;}
	console.log("The greater number of " + x + " and " + y + " is " + num + ".")
}
greaterNum(5,3)
greaterNum(6,1)
greaterNum(1,8)

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
	if (lang === "es"){
		console.log(lang);
	}
	else if (lang === "de"){
		console.log(lang);
	}
	else {
		console.log("en");
	}
}

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
	if ( score <= 50){
		console.log("F");
	}
	else if ( score > 50 && score <= 60){
		console.log("D");
	}
	else if ( score > 60 && score <=70){
		console.log("C");
	}
	else if ( score > 70 && score <= 80)
		console.log("B");
	else {
		console.log("A");
	}
}

assignGrade(67)
assignGrade(82)
assignGrade(90)
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number){
	if (number === 1 ){
		console.log(number + " "+ noun);
	}
	else {
		console.log(number + " " noun + "s");
	}
}



