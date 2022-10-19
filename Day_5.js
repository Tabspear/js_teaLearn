/**
 * Create a new codepen
Write a function that accepts a number as an argument
alert the user whether the given number is even or odd
Call your function
 */

function number(num){
    if(num%2===1){
        alert(`${num} number is an odd number `)
    }
    else if(num%-2===-1){
      alert(`${num} number is an odd number `)
    }
    else {
        alert(`${num} number is an even number `)
    }
}

number(2)
number(7)
number(-5)

// Take Home
function Password(valueP) {
  valueP = prompt("Kindly input your password");

  if (valueP.length >= 6 && valueP.length <= 20) {
    alert("Your password has been accepted");

  } else if (valueP === "") {
    alert("Kindly update a valid password");
  } 
  else {
    alert("Kindly update a valid password");
  }

   const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const firstLetter = valueP.charAt(0)
    const startWith = alpha.includes(firstLetter.toUpperCase())

    if(startWith){
        console.log(true)
    }
    else{
      console.log("does not start with a letter")
    }
}

Password();

// Always write your test cases before running the code
//
