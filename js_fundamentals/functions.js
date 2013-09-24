// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(children,name,city,job){
	console.log("You will be a " + job + " in " + city + ", and married to " + name + " with " + children + "." );
}

tellFortune(4,"Joe-An","Ottawa","Developer")
tellFortune(5,"Julia","Toronto","Senior Developer")
tellFortune(6,"Jasmin","San Francisco","Lead Developer")

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
function calculataeAge(birth, current){
	age1 = current - birth
	age2 = current - birth - 1
	console.log("You are either " + age1 + " or " + age2 + ".");
}
calculataeAge(1993, 2013)
calculataeAge(1994, 2013)
calculataeAge(1990, 2013)
/*
function calculataeAge(birth){
	current = currentTime.getFullYear()
	age1 = current - birth
	age2 = current - birth - 1
	console.log("You are either " + age1 + " or " + age2 + ".");
}
*/

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, perDay){
	var maxAge = 100
	var lifeSupply = (100 - age) * 365 * perDay
	console.log("YOu will need " + lifeSupply + " to last you untile the ripe old age of " + maxAge );
}
calculateSupply(20, 4)
calculateSupply(32, 5)
calculateSupply(12, 9)



// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCirucumfrence(radius){
	console.log("The circumference is " + (2 * 3.14 * radius));
}

function calcArea(radius){
	console.log("The area is " + (3.14 * radius * radius));
}

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function cToF(c){
	var f = (c * (9/5)) + 32;
	console.log(c  + "c is " + f + "f")
}

function fToC(f){
	var c= (f - 32) * (5/9);
	console.log(f + " f is " + c + "c")
}
