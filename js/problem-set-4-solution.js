/*
 * SOLUTION: Hello.
 */

function hello() {
  let result = "Hello, AP Computer Science Principles!";  // place holder got the text that is going to be displayed as a result
  document.getElementById("output1").innerHTML = result;  // Selects and replaces the emty div with the text "result" holds

  check("hello"); // checks if the code and what is being displayed is correct
}

/*
 * SOLUTION: Hello, Again.
 */

function helloAgain() {
  let name = prompt("What is your name?"); // Ask user to enter a name that will be placed in the variable "name"

  let result = "Hello, " + name + "!"; // combines 3 strings to produce a hello using the name that was prompted by the user.
  document.getElementById("output2").innerHTML = result; //Prints what the result is, which is a saying hello to the name that was inputted by the user

  check("helloAgain", name); // Check if code and the display is correct corresponding to this problem
}

/*
 * SOLUTION: Celsius.
 */

function celsius() {
  let cels = Number(((Math.random() * 1001) - 100).toFixed(2)); // Generates a random number from -100 to 1000 that is fixed to 2 decimal places

  let fahr = cels * 9 / 5 + 32; // Equation/formula to convert the random number to Farhenheit
  let result = cels + " degrees Celsius equals " + fahr.toFixed(2) + " degrees Fahrenheit."; // Combines a few stings and numbers into a varible "resilt" that will display x decrees celcius will equal y degrees fahrenheit.
  document.getElementById("output3").innerHTML = result; // prints what has been combined in the result

  check("celsius", cels); // Checks if code and what is display is correct.
}

/*
 * SOLUTION: Fahrenheit.
 */

function fahrenheit() {
  let fahr = Number(((Math.random() * 1001) - 100).toFixed(2)); // Generates a random numbver from -100 to 1000 that is fixed to 2 decimal places

  let cels = (fahr - 32) * 5 / 9; // converts the random number which is in fahrenheit and converts it into celcius drgrees
  let result = fahr + " degrees Fahrenheit equals " +  cels.toFixed(2) + " degrees Celsius."; // Combines strings and numbers into a placeholder that display what x degrees farhenheit will equal y degrees celsius
  document.getElementById("output4").innerHTML = result; // prints what has been combined in the varible "result"

  check("fahrenheit", fahr); // Check if code and what is displayed for the problem fahrenheit is correct
}

/*
 * SOLUTION: Inches.
 */

function inches() {
  const MILE = 63360; // sets a constant that 63360 inches is in a mile
  const YARD = 36; // sets a constant that 36 inches are in a yard
  const FOOT = 12; // sets a constant that 12 inches are in a feet

  let input = -1; // sets input as -1 inforder to execute code below
  while (input < 0) { // executes what ever is in the while function is less that 0
    input = Number(prompt("Enter a non-negative integer.")); //sets input to a number that has been recieved by the user

    if (input === null) { // if the input is left empty by the user then the code below will be executed
      break; // breaks this loop
    } else if (Number.isNaN(input)) { // if input submitted by the user is not a number then the code below is run
      input = -1; // sets input to -1 again inorder to rin the while loop again
    } else if (!Number.isInteger(input)) { // if input is not an integer then the code below is run
      input = -1; // sets input to -1 in order to run the while loop again
    }
  }

  if (input !== null) { // if the input is not blank then the code below is executed
    let inches = input; // set the place holder for inches as the inputted number form the user.
    let miles = Math.floor(inches / MILE); // sets the number of miles by the amount of times miles (63360) can be divided into the inches inputted by the user
    inches = inches % MILE; // set inches to a new value by getting the remainder of how many time smiles can be divided into the value submitted byt the user
    let yards = Math.floor(inches / YARD); // sets the number of yards by the amount of times yards (36) can be divided into the inches inputted by the user
    inches = inches % YARD; // sets a new value to inches by getting the remainder by dividing the remaining inches by yards.
    let feet = Math.floor(inches / FOOT); // sets the number of feet by the amount of times a feet and be divided into the remaining number of inches
    inches = inches % FOOT; // Sets inches as the final remainder when checking how much is left when foot is divided into the remaining inches

    let result = "Miles: " + miles + "<br/>" + // sets result to display x amount of miles
                 "Yards: " + yards + "<br/>" + // adds onto result by displaying y amount of yards
                 "Feet: " + feet + "<br/>" + // adds onto the result by display z feet
                 "Inches: " + inches; // adds onto the result by displaying the remaining inches left
    document.getElementById("output5").innerHTML = result; // sets the empty div to print the text placed in the varible "result"
  } else { // this code below is run if the input is a null as backup if something goes wrong
    document.getElementById("output5").innerHTML = ""; // sets the div in the html to blank
  }

  check("inches", input); // check if the code and what is being printed is correct
}

/*
 * SOLUTION: Centimeters.
 */

function centimeters() {
  const KILOMETER = 100000; // sets a constant that there are 100000 centimetes in a km
  const METER = 100; // set a contant that 100 centimeters are in a meter

  let input = -1; // sets input to -1 in order to run the code below
  while (input < 0) { // while input is < 0 then then code below is being executed
    input = Number(prompt("Enter a non-negative integer.")); // asks the user to input a number that is non-negative

    if (input === null) { // if the input is left blank then the code below is executed
      break; // breaks function to repeat while loop again
    } else if (Number.isNaN(input)) { // if inputted string is not a number then the code below is executed
      input = -1; //sets input to -1 in order to run the loop again
    } else if (!Number.isInteger(input)) { // checks if the number is not an integer. if true then the code below is executed
      input = -1; // sets input to -1 and repeats the loop
    }
  }

  if (input !== null) { // if the input passes through all of the restrictions above thent he clode below is executed
    let centimeters = input; // sets the number of centimeters to the number the user has submitted
    let kilometers = Math.floor(centimeters / KILOMETER); // Sets the number of kilometers the number of times 100000 can be divided into the user submitted number
    centimeters = centimeters % KILOMETER; // Sets centimeter as the new remainder from dividing the submitted number by 100000
    let meters = Math.floor(centimeters / METER); // sets the number of meters by checking how many times meters can be divided into the remainder of the previous code
    centimeters = centimeters % METER; // sets the remaining number of centimeters by getting the remainder after diving the current number of centimetes by 100

    let result = "Kilometers: " + kilometers + "<br/>" + // sets result to display x amount of kilometers
                 "Meters: " + meters + "<br/>" + // adds onto the result to display y amount of meters
                 "Centimeters: " + centimeters; // adds onto the result by displaying the remaining number of centimeters left
    document.getElementById("output6").innerHTML = result; // dispays the empty div with what was combined in the varible result
  } else { // if everything above is avoided then the code below is executed
    document.getElementById("output6").innerHTML = ""; // sets the div in HTML to blank
  }

  check("centimeters", input); // check if code and what is being displayed is blank
}

/*
 * SOLUTION: Fluid Ounces.
 */

function fluidOunces() {
  const GALLON = 128; // sets a constant that there are 128 fluid ounces in a gallon
  const QUART = 32; // sets a constant that there are 32 fluid ounces in a quart
  const PINT = 16; // sets a constant that there are 16 fluid ounces in a pint
  const CUP = 8; // sets a constant that there are 8 fluid ounces in a cup

  let input = -1; // sets input to -1 in order to run the code below
  while (input < 0) { // while input is < 0 then then code below is being executed
    input = Number(prompt("Enter a non-negative integer.")); // asks the user to input a number that is non-negative

    if (input === null) { // if the input is left blank then the code below is executed
      break; // breaks function to repeat while loop again
    } else if (Number.isNaN(input)) { // if inputted string is not a number then the code below is executed
      input = -1; //sets input to -1 in order to run the loop again
    } else if (!Number.isInteger(input)) { // checks if the number is not an integer. if true then the code below is executed
      input = -1; // sets input to -1 and repeats the loop
    }
  }

  if (input !== null) { // if the input passes through all of the restrictions above thent he clode below is executed
    let fluidOunces = input; // sets the number of fluid ounces to the number the user has submitted
    let gallons = Math.floor(fluidOunces / GALLON); // Sets the number of gallons the number of times 128 can be divided into the user submitted number
    fluidOunces = fluidOunces % GALLON; // sets the remainder of fluid ounces by getting the remainder from dividing fluid ounces by 128
    let quarts = Math.floor(fluidOunces / QUART); // Sets the number of quarts by dividing the remaining number of fluid ounces by 32
    fluidOunces = fluidOunces % QUART; // sets the new remainder of fluid ounces by getting the remainder from dividing the current number of fluid ounces by 32
    let pints = Math.floor(fluidOunces / PINT); // sets te number of pints by dividing the remaining fluid ounces left by 16
    fluidOunces = fluidOunces % PINT; // sets the new remainder of fluid ounces by getting the remainder from dividing the current number of fluid ounces by 16
    let cups = Math.floor(fluidOunces / CUP); // sets the number of cups by dividing the remaining number of fluid ounces by 8
    fluidOunces = fluidOunces % CUP; // gets the final number of fluid ounces by getting the remainder from the current amount of fluid ounces and dividing it by 8

    let result = "Gallons: " + gallons + "<br/>" + // sets result to display w amount of gallons
                 "Quarts: " + quarts + "<br/>" + // adds onto the result to display x amount of quarts
                 "Pints: " + pints + "<br/>" + // adds onto the result to display y amount of pints
                 "Cups: " + cups + "<br/>" + // adds onto the result to display z amount of cups
                 "Fluid Ounces: " + fluidOunces; // adds onto the result by displaying the remaining number of fluid ounces left
    document.getElementById("output7").innerHTML = result; // dispays the empty div with what was combined in the varible result
  } else { // if everything above is avoided then the code below is executed
    document.getElementById("output7").innerHTML = ""; // sets the div in HTML to blank
  }

  check("fluidOunces", input); // check if code and what is being displayed is blank
}

/*
 * SOLUTION: Ounces.
 */

function ounces() {
  const TON = 32000; // sets constant that there are 32000 ounces in a ton
  const POUND = 16; // sets constant that there are 16 ounces in a pound

  let input = -1; // sets input to -1 in order to run the code below
  while (input < 0) { // while input is < 0 then then code below is being executed
    input = Number(prompt("Enter a non-negative integer.")); // asks the user to input a number that is non-negative

    if (input === null) { // if the input is left blank then the code below is executed
      break; // breaks function to repeat while loop again
    } else if (Number.isNaN(input)) { // if inputted string is not a number then the code below is executed
      input = -1; //sets input to -1 in order to run the loop again
    } else if (!Number.isInteger(input)) { // checks if the number is not an integer. if true then the code below is executed
      input = -1; // sets input to -1 and repeats the loop
    }
  }

  if (input !== null) { // if the input passes through all of the restrictions above thent he clode below is executed
    let ounces = input; // sets the number of ounces to the number the user has submitted
    let tons = Math.floor(ounces / TON); // Sets the number of tons the number of times 32000 can be divided into the user submitted number
    ounces = ounces % TON; // sets the remainder of ounces by getting the remainder from dividing ounces by 32000
    let pounds = Math.floor(ounces / POUND); // sets the number of pounds by dividing the remaining number of ounces by 16
    ounces = ounces % POUND; // sets the new remainder of ounces by getting the remainder from dividing the remaining number ounces by 16

    let result = "Tons: " + tons + "<br/>" + // sets result to display x amount of tons
                 "Pounds: " + pounds + "<br/>" + // adds onto the result to display y amount of pounds
                 "Ounces: " + ounces; // adds onto the result by displaying the remaining number of ounces left
    document.getElementById("output8").innerHTML = result; // dispays the empty div with what was combined in the varible result
  } else { // if everything above is avoided then the code below is executed
    document.getElementById("output8").innerHTML = ""; // sets the div in HTML to blank
  }

  check("ounces", input); // check if code and what is being displayed is blank
}

/*
 * SOLUTION: Money.
 */

function money() {
  const DOLLAR = 100; // sets a constant that there are 100 pennies in a dollar
  const QUARTER = 25; // sets a constant that there are 25 pennies in a quarter
  const DIME = 10; // sets a constant that there are 10 pennies in a dime
  const NICKEL = 5; // sets a constant that there are 5 pennies in a nickel

  let input = -1; // sets input to -1 in order to run the code below
  while (input < 0) { // while input is < 0 then then code below is being executed
    input = Number(prompt("Enter a non-negative integer.")); // asks the user to input a number that is non-negative

    if (input === null) { // if the input is left blank then the code below is executed
      break; // breaks function to repeat while loop again
    } else if (Number.isNaN(input)) { // if inputted string is not a number then the code below is executed
      input = -1; //sets input to -1 in order to run the loop again
    } else if (!Number.isInteger(input)) { // checks if the number is not an integer. if true then the code below is executed
      input = -1; // sets input to -1 and repeats the loop
    }
  }

  if (input !== null) { // if the input passes through all of the restrictions above thent he clode below is executed
    let pennies = input; // sets the number of pennies to the number the user has submitted
    let dollars = Math.floor(pennies / DOLLAR); // Sets the number of dollars the number of times 100 can be divided into the user submitted number
    pennies = pennies % DOLLAR; // sets the remainder of pennies by getting the remainder from dividing pennies by 100
    let quarters = Math.floor(pennies / QUARTER); // sets the number of quarters by dividing the remaining number of pennies by 25
    pennies = pennies % QUARTER; // sets the new remainder of pennies by getting the remainder from dividing pennies by 25
    let dimes = Math.floor(pennies / DIME); // sets the number of dimes by dividing the remaining number of pennies by 10
    pennies = pennies % DIME; // sets the new remainder of pennies by getting the remainder from dividing pennies by 10
    let nickels = Math.floor(pennies / NICKEL); // sets the number of nickels by dividing the remaining number of pennies by 5
    pennies = pennies % NICKEL; // sets the new remainder of pennies by getting the remainder from dividing pennies by 5

    let result = "Dollars: " + dollars + "<br/>" + // sets result to display w amount of dollars
                 "Quarters: " + quarters + "<br/>" + // adds onto the result to display x amount of quarters
                 "Dimes: " + dimes + "<br/>" + // adds onto the result to display y amount of dimes
                 "Nickels: " + nickels + "<br/>" + // adds onto the result to display z amount of nickels
                 "Pennies: " + pennies;  // adds onto the result by displaying the remaining number of pemmies left
    document.getElementById("output9").innerHTML = result; // dispays the empty div with what was combined in the varible result
  } else { // if everything above is avoided then the code below is executed
    document.getElementById("output9").innerHTML = ""; // sets the div in HTML to blank
  }

  check("money", input); // check if code and what is being displayed is blank
}

/*
 * SOLUTION: Change.
 */

function change() {
  const QUARTER = 25; // sets a constant that there are 25 pennies in a quarter
  const DIME = 10; // sets a constant that there are 10 pennies in a dime
  const NICKEL = 5; // sets a constant that there are 5 pennies in a nickel

  let input = -1; // sets input to -1 in order to run the code below
  while (input < 0) { // while input is < 0 then then code below is being executed
    input = Number(prompt("Enter a non-negative integer.")); // asks the user to input a number that is non-negative

    if (input === null) { // if the input is left blank then the code below is executed
      break; // breaks function to repeat while loop again
    } else if (Number.isNaN(input)) { // if inputted string is not a number then the code below is executed
      input = -1; //sets input to -1 in order to run the loop again
    }
  }

  if (input !== null) { // if the input passes through all of the restrictions above thent he clode below is executed
    let pennies = input; // sets the number of pennies to the number the user has submitted
    pennies = Number((pennies * 100.00).toFixed(0)); // Makes pennies into a number while fixed to an integer while making the data type into a number and affixing that onto the varible pennies
    let quarters = Math.floor(pennies / QUARTER); // sets the number of quarters by dividing the number of pennies by 25
    pennies = pennies % QUARTER; // sets the remainder of pennies by getting the remainder from dividing pennies by 25
    let dimes = Math.floor(pennies / DIME); // sets the number of dimes by dividing the remaining number of pennies by 10
    pennies = pennies % DIME; // sets the new remainder of pennies by getting the remainder from dividing pennies by 10
    let nickels = Math.floor(pennies / NICKEL); // sets the number of nickels by dividing the remaining number of pennies by 5
    pennies = pennies % NICKEL; // sets the new remainder of pennies by getting the remainder from dividing pennies by 5

    let coins = quarters + dimes + nickels + pennies; // Adds the total number of quarters dimes nickel and penniers into the place holder coin
    document.getElementById("output10").innerHTML = coins + (coins === 1 ? " coin." : " coins."); // display the minimsal number of coins or coin in change into the div
  } else { // if everything above is avoided then the code below is executed
    document.getElementById("output10").innerHTML = ""; // sets the div in HTML to blank
  }

  check("change", input); // check if code and what is being displayed is blank
}
