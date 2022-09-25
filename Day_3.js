// CHALLENGE 1
// Prompt the user for their first name
prompt("What is your first namgie ?");
// Store their input to a variable
let userName = prompt("What is your first name ?");
// Reverse your user’s name
let reversedUserName = userName.split("").reverse().join("");

//Make sure your split has double quotes, make sure your join has double quotes
// alert the reversed string
alert(reversedUserName);

for (let i = reversedUserName.length; i >= 0; i--) {
  console.log(reversedUserName[i]);
}

// Challenge 2
// Prompt for a number value (provide a default of 10)
let firstNum = prompt("Input a number")
// Prompt for a second number value (provide a default of 10)
let secondNum = prompt("Input another number")
// Convert the prompted values into integers using parseInt()
let addedNum = parseInt(firstNum)+parseInt(secondNum)
// Add the numbers together and alert the user with the result
alert(addedNum)


//Take Home 
// Ask for the user's first name
const firstName = prompt("Input your first name")
// Ask for the user's last name
const lastName = prompt("Input your last name")
// Log the user's first name to the console
console.log(firstName)
// Alert the user's last name
alert(lastName)

// *BONUS* 
// Ask for the user's birthday
let birthDate = prompt("What is your Day of Birth ?")
// Ask the user to confirm their birthday input
confirm("Are you sure ?")
// Alert the user's birthday
alert(birthDate)
