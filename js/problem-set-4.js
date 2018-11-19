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

  let gallons = 0;
  let quarts = 0;
  let pints = 0;
  let cups = 0;
while (fluidOunces >= 128) {
  gallons = gallons + 1
  fluidOunces = fluidOunces - 128;
}
while (fluidOunces >= 32) {
  quarts = quarts + 1
  fluidOunces = fluidOunces - 32;
}
while (fluidOunces >= 16) {
  pints = pints + 1
  fluidOunces = fluidOunces - 16;
}
while (fluidOunces >= 8) {
  cups = cups + 1
  fluidOunces = fluidOunces - 8;
}

var div = document.getElementById("output7");
div.innerHTML = 'Gallons: ' + gallons + '<br/>' + 'Quarts: ' + quarts + '<br/>' + 'Pints: ' + pints + '<br/>' + 'Cups: ' + cups + '<br/>' + 'Fluid Ounces: ' + fluidOunces;

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

  let tons = 0;
  let pounds = 0;
while (ounces >= 32000) {
  tons = tons + 1
  ounces = ounces - 32000;
}
while (ounces >= 16) {
  pounds = pounds + 1
  ounces = ounces - 16;
}

var div = document.getElementById("output8");
div.innerHTML = 'Tons: ' + tons + '<br/>' + 'Pounds: ' + pounds + '<br/>' + 'Ounces: ' + ounces;

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

  let dollars = 0;
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
while (pennies >= 100) {
  dollars = dollars + 1
  pennies = pennies - 100;
}
while (pennies >= 25) {
  quarters = quarters + 1
  pennies = pennies - 25;
}
while (pennies >= 10) {
  dimes = dimes + 1
  pennies = pennies - 10;
}
while (pennies >= 5) {
  nickels = nickels + 1
  pennies = pennies - 5;
}

var div = document.getElementById("output9");
div.innerHTML = 'Dollars: ' + dollars + '<br/>' + 'Quarters: ' + quarters + '<br/>' + 'Dimes: ' + dimes + '<br/>' + 'Nickels: ' + nickels + '<br/>' + 'Pennies: ' + pennies;

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


  let pennies = amount*100
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;

  while (pennies >= 25) {
    quarters = quarters + 1;
    pennies = pennies - 25;
  }
  while (pennies >= 10) {
    dimes = dimes + 1;
    pennies = pennies - 10;
  }
  while (pennies >= 5) {
    nickels = nickels + 1;
    pennies = pennies - 5;
  }

let coins = Math.floor(quarters + dimes + pennies + nickels);

  var div = document.getElementById("output10");
  div.innerHTML = coins + ' coins.';

  if (input <= .01 || input <= .05 || input <= .25 || input <= .1) {
    var div = document.getElementById("output10");
    div.innerHTML = coins + ' coin.';
  }


  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
