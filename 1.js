//Assignment 1:
//Question 1:    Write a program that defines and logs different data types.

// We store String value 'The Knights' in the str variable using let keyword
let str = 'The Knights' 
console.log('\nThe String is ',str)   // We print it using console.log
console.log('Its DataType is ', typeof str) // We check it's datatype using typeof keyword. Here we get 'string' as it's datatype

// We store a numerical value 20 in the num variable using let keyword
let num = 20
console.log('\nThe number is ',num)   // We print it using console.log
console.log('Its DataType is ', typeof num) // We check it's datatype using typeof keyword. Here we get 'number' as it's datatype

// We store a boolean value of true in the bool variable using let keyword
let bool = true
console.log('\nThe Boolean Value is ',bool)  // We print it using console.log
console.log('Its DataType is ', typeof bool)     // We check it's datatype using typeof keyword. Here we get 'boolean' as it's datatype

// We can store values of different datatyes in obj by using {} and seperate them by using , and we have declared them using let keyword
let obj = {
    name: 'Kuber',
    age : 17
}
console.log('\nThe Object is ',obj) // We print it using console.log
console.log('Its DataType is ', typeof obj) // We check it's datatype using the typeof keyword. here we get 'object' as it's datatype

// We can store values of different datatyes in array inside the [] and seperate them by using ',' and we have declared them using let keyword
let arr = [1, 2, 3, 4, 5, 'Kuber', true]
console.log('\nThe Array is ',arr)  // We print it using console.log
console.log('Its DataType is ', typeof arr) // We check it's datatype using the typeof keyword. Here we get 'object' as it's datatype. Why Object ? So array is a special type of object used in js