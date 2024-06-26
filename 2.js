// Question 2: Write a program that performs basic arithmetic operations.

// As given in question we need to take user input for this we use prompt function which can only be used in the browser
let num1 = Number(prompt('Enter the first number : '))  // We use prompt function to take the First Number and store it in the num1 variable using let keyword. We also type caste it as prompt takes the values in string 
let num2 = Number(prompt('Enter the second number : ')) // We use prompt function to take the Second Number and store it in the num2 variable using let keyword

// We perform addition between num1 and num2 and then store it in add variable using let keyword.
let add = num1 + num2
console.log('The Addition is ',add) // Here the addition of the two number are printed 

// We perform subtraction between num1 and num2 and then store it in sub variable using let keyword.
let sub = num1 - num2
console.log('The Subtraction is ',sub) // Here the subtraction of the two number are printed 

// We perform multiplication between num1 and num2 and then store it in mul variable using let keyword.
let mul = num1 * num2
console.log('The Multiplication is ',mul) // Here the multiplication of the two number are printed 

// We perform division between num1 and num2 and then store it in div variable using let keyword.
let div = num1 / num2
console.log('The Division is ',div) // Here the division of the two number are printed 