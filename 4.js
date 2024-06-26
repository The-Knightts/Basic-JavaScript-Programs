// Question 4:  Write a program that prints all even numbers from 1 to 20

// We created a interative variable and assign 0 to it.
let i = 0
while(i <= 20){ // We kept interating the loop using while till it reaches 20
    i++         // we used incrementation here to increase the value of i 
    if(i % 2 == 1)  // Used this if for skip the odd number
        continue    // Continue keyword is used for skipping the iteration
    
    console.log(i)  // Printing the even i variable value
}

console.log()   // just used for seperating the while and for loop

for(let i = 2; i <= 20; i += 2){    //Used for loop and assigned i = 2 as we need to print even numbers and i will go upto 20 and will increment by 2 after every iteration
    if(i % 2 !== 0)     // Used for skipping the odd number
        continue        // Continue keyword is used for skipping the iteration
    console.log(i)      // Printing the even i variable value
}

console.log()// just used for seperating the for loop and do while

let a = 0;  // Created a variable a for interation and assigned it 0
do {        // Used do while for the iteration
    a += 2; // incrementing the a 
    if (a % 2!== 0) //Created for skipping the variable
        continue;   // Skips the iteration
    
    console.log(a); // Print the even i variable value
} while (a <= 20);  // Iterates untill a is greater than 20 