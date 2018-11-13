/*
 * Hello. 2 points.
 */

function hello() {
  var div = document.getElementById("output1");
  div.innerHTML = "Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

name = prompt("Please enter your name");
var div = document.getElementById("output2");
div.innerHTML = 'Hello, ' + name + '!';

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

let fahr = ((cels*1.8) + 32).toFixed(2);
var div = document.getElementById("output3");
div.innerHTML = cels + ' degrees Celsius equals ' + fahr + ' degrees Fahrenheit.';

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let cels = ((fahr-32) * 5/9).toFixed(2);
  var div = document.getElementById("output4");
  div.innerHTML = fahr + ' degrees Fahrenheit equals ' + cels + ' degrees Celsius.';
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let miles = 0;
  let yards = 0;
  let feet = 0;
while (inches >= 63360) {
  miles = miles + 1
  inches = inches - 63360;
}
while (inches >= 36) {
  yards = yards + 1
  inches = inches - 36;
}
while (inches >= 12) {
  feet = feet + 1
  inches = inches - 12;
}

var div = document.getElementById("output5");
div.innerHTML = 'Miles: ' + miles + '<br/>' + 'Yards: ' + yards + '<br/>' + 'Feet: ' + feet + '<br/>' + 'Inches: ' + inches;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilometers = 0;
  let meters = 0;
while (centimeters >= 100000) {
  kilometers = kilometers + 1
  centimeters = centimeters - 100000;
}
while (centimeters >= 100) {
  meters = meters + 1
  centimeters = centimeters - 100;
}

var div = document.getElementById("output6");
div.innerHTML = 'Kilometers: ' + kilometers + '<br/>' + 'Meters: ' + meters + '<br/>' + 'Centimeters: ' + centimeters;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let kilometers = 0;
  let meters = 0;
while (centimeters >= 100000) {
  kilometers = kilometers + 1
  centimeters = centimeters - 100000;
}
while (centimeters >= 100) {
  meters = meters + 1
  centimeters = centimeters - 100;
}

var div = document.getElementById("output6");
div.innerHTML = 'Kilometers: ' + kilometers + '<br/>' + 'Meters: ' + meters + '<br/>' + 'Centimeters: ' + centimeters;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let kilometers = 0;
  let meters = 0;
while (centimeters >= 100000) {
  kilometers = kilometers + 1
  centimeters = centimeters - 100000;
}
while (centimeters >= 100) {
  meters = meters + 1
  centimeters = centimeters - 100;
}

var div = document.getElementById("output6");
div.innerHTML = 'Kilometers: ' + kilometers + '<br/>' + 'Meters: ' + meters + '<br/>' + 'Centimeters: ' + centimeters;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let kilometers = 0;
  let meters = 0;
while (centimeters >= 100000) {
  kilometers = kilometers + 1
  centimeters = centimeters - 100000;
}
while (centimeters >= 100) {
  meters = meters + 1
  centimeters = centimeters - 100;
}

var div = document.getElementById("output6");
div.innerHTML = 'Kilometers: ' + kilometers + '<br/>' + 'Meters: ' + meters + '<br/>' + 'Centimeters: ' + centimeters;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
  let kilometers = 0;
  let meters = 0;
while (centimeters >= 100000) {
  kilometers = kilometers + 1
  centimeters = centimeters - 100000;
}
while (centimeters >= 100) {
  meters = meters + 1
  centimeters = centimeters - 100;
}

var div = document.getElementById("output6");
div.innerHTML = 'Kilometers: ' + kilometers + '<br/>' + 'Meters: ' + meters + '<br/>' + 'Centimeters: ' + centimeters;

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
