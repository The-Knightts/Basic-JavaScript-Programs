// Question 3: Create a program that checks if a number is positive, negative, or zero.

// We use prompt to take user input of the Number and store it in the num variable using let keyword and we also type caste the command as it's default type is string  
let num = Number(prompt('Enter the Number'))

// For check whether the num is positive, negative or zero we use if-else statements
if (num > 0)    // In this if we check whether the num is greater than 0. If yes, then it will print 'The number is Positive' on console in the browser
    console.log('The Number is Positive')

else if (num < 0) // For the second checking condition we use else if and it check whether the num is less than 0. If yes, then it will print 'The number is Negative' on console in the browser
    console.log('The Number is Negative')

else    // The else condition is executed when all the above statement is false or unsatisfied. It will print 'The Number is Zero' on console in the browser
    console.log('The Number is Zero')
