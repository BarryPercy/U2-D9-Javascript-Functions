/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

function area (x,y){
    return x*y;
}

const result1 = area(3,4);
console.log("1.", result1);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(x,y){
    if(parseInt(x)!==x||parseInt(y)!==y){
        return "One or both numbers given are not integers";
    } else if(x===y){
        return (x+y)*3;
    }else{
        return x+y;
    }
}
const result2 = crazySum(3,2);
console.log("2.", result2);


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(x){
     if(x>19){
            return (Math.abs(19-x))*3;
        }else{
            return Math.abs(19-x);
        }
}

const result3 = crazyDiff(-20);
console.log("3.", result3);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

function boundary(n){
    if(parseInt(n)!==n){
        return "n is not an integer"
    }else if((n>20&&n<=100)||n===400){
        return true;
    }else{
        return false;
    }
}
const result4 = boundary(80);
console.log("4.", result4);
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(string){
    if(typeof string!== 'string'){
        return "That ain't a string chief";
    }else if(string.startsWith("Strive")){
        return string;
    }else{
        return "Strive"+string;
    }
}
const result5 = strivify("hey it's me Barry");
console.log("5.", result5);

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

function check3and7(n){
    if(n>0&&(n%3===0||n%7===0)){
        return true;
    }else{
        return false;
    }
}

const result6 = check3and7(14);
console.log("6.", result6);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(string){
    tempString ="";
    for(i=string.length-1;i>=0;i--){
        tempString+= string[i];
    }
    return tempString;
}
const result7 = reverseString("hey it's me Barry");
console.log("7.", result7);
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(string){
    tempString="";
    tempString+=string[0].toUpperCase();
    for(i=1;i<string.length;i++){
        tempString+=string[i];
    }
    return tempString;
}
const result8 = upperFirst("hey it's me Barry");
console.log("8.", result8);

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

function cutString(string){
    newString="";
    for(i=1;i<string.length-1;i++){
        newString+=string[i]
    }
    return newString;
}
const result9 = cutString("hey it's me Barry");
console.log("9.", result9);
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n){
    randomArray = [];
    for(i=0;i<n;i++){
        randomArray.push(Math.round(Math.random()*10))
    }
    return randomArray
}
const result10 = giveMeRandom(10);
console.log("10.", result10);
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
