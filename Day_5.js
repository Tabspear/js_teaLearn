/**
 * Create a new codepen
Write a function that accepts a number as an argument
alert the user whether the given number is even or odd
Call your function
 */

// function number(num){
//     if(num%2===1){
//         alert(`${num} number is an odd number `)
//     }
//     else {
//         alert(`${num} number is an even number `)
//     }
// }

// number(2)

// Take Home
function Password(valueP) {
  valueP = prompt("Kindly input your password");

  if (valueP.length >= 6 && valueP.length <= 20) {
    alert("Your password has been accepted");
  } else if (valueP === "") {
    alert("Kindly update a valid password");
  } else {
    alert("Kindly update a valid password");
  }
}

Password();
