//Question 5:  Create a program that simulates a simple grading system.

// We took user input using prompt function. It can only be used using Browser and stored it in grade variable using let keyword
let grade = Number(prompt('Enter the Grade of Student (0 - 100)'))

// Using if else ladder for the operation
if (grade >= 90 && grade <= 100) // This check whether the grade is greater than equal to 90 and grade is less than equal to 100
    console.log('Grade: A'); // If true, then it prints this log

else if (grade >= 80 && grade <= 89) // This check whether the grade is greater than equal to 80 and grade is less than equal to 89
    console.log('Grade: B'); // If true, then it prints this log

else if (grade >= 70 && grade <= 79) // This check whether the grade is greater than equal to 70 and grade is less than equal to 79
    console.log('Grade: C'); // If true, then it prints this log

else if (grade >= 60 && grade <= 69) // This check whether the grade is greater than equal to 60 and grade is less than equal to 69
    console.log('Grade: D'); // If true, then it prints this log

else    // If the grade is less than 60 then the else part is executed 
    console.log('Grade: F'); // If true, then it prints this log