// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

let user1 = prompt("Input a number");
let user2 = prompt("input another number");
let Input_Num1 = parseInt(user1);
let Input_Num2 = parseInt(user2);
console.log(Input_Num1, Input_Num2);

if (Input_Num1 > Input_Num2) {
  alert(Input_Num1);
} else if (Input_Num2 > Input_Num1) {
  alert(Input_Num2);
} else {
  alert("No value Found ");
}

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
if (typeof user1 !== "number" && typeof user2 !== "number") {
  console.log("kik");
  prompt("Kindly Input a number !");
}
 else {
  alert("Well-done !!");
}
// If so, prompt the user again to input a number

//  function Abodi(){
//     Input_Num1 > Input_Num2 ? alert(Input_Num1): Input_Num2 > Input_Num1 ? (alert(Input_Num2)):alert("No value found")
//  }

//  Abodi()

// Take Home
