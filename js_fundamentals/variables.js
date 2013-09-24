// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var children = 4;
var name = "Joe-An";
var city = "Toronto";
var job = "Junior Developer";
console.log("You will be a " + job + " in " + city + ", and married to " + name + " with " + children + " kids.");


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var currentYear = 2013;
var birthYear = 1993;
console.log("They are " + (currentYear - birthYear))

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var currentAge = 20;
var maxAge = 100;
var snackADay = 4;
var lifeSupply = (maxAge - currentAge) * 365 * snackADay;
console.log("You will need " + lifeSupply + " to last you until the ripe old age of " + maxAge + ".");


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 10;
var circumference = radius * 2 * 3.13;
var area = 3.14 * radius * radius;
console.log("The circumference is " + circumference + ".");
console.log("The area is " + area + ".")

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 20;
var celsiusToF = (celsius * (9/5)) + 32;
console.log(celsius + "C is " + celsiusToF + " f")

var fahrenheit = 100;
var fToC = (fahrenheit - 32) * (5/9);
console.log(fahrenheit + "f is " + fToC + " c")

