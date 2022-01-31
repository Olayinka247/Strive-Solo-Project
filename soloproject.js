// // JS Basics

// /* EXERCISE A
//   // Create a variable called test and assign a string value to it.

console.log("\n -------------Answer Exercise A--------------");

let test = "My Name"
console.log(test);

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
console.log("\n -------------Answer Exercise B------------------");

 let a = 10
 let b = 20
 let sum = a + b
 console.log(sum);

 /* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log("\n -----------Answer Exercise C--------------");

let random = Math.floor(Math.random() * 20);
console.log(random);
  
/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log("\n --------Answer  Exercise D-------------");

let me = {
    name: "May",
    surname: "Adegunwa",
    age: 29
}
console.log(me);

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
console.log("\n --------------Answer Exercise E ----------");

delete me.age
console.log( me);

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

   */
console.log("\n-------Answer Exercise F----------");
  me.skill= ["Driving","swimming","boxing"]
  console.log(me);

  /* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
console.log("\n -------- Answer G----------");
me.skill.pop()
console.log(me);

console.log("\n -------------Answer Functions Exercise 1--------------");

// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
let dice = function (y) {
    return Math.floor(Math.random() * y) +1
}
console.log(dice (6));


console.log("\n -------------Answer Functions Exercise 2--------------");
/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

let whoIsBigger = function (g,o){
    if (g > o){
        return g
    } else{
        return o
    } 
}
console.log(whoIsBigger (12, 4));

console.log("\n -------------Answer Functions Exercise 3--------------");

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
 let universe = ("I Love Programming")
 const myArray = universe.split ("")
 console.log(myArray);

 console.log("\n -------------Answer Functions Exercise 4--------------");

 /* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
const deleteOne = (str, boolean) => {
    let withoutFirstLetter = str.slice(1)
    let withoutLastLetter = str.slice(0, -1)
    return boolean ? withoutFirstLetter : withoutLastLetter
}
console.log(deleteOne('strive', true))

console.log("\n -------------Answer Functions Exercise 5--------------");
/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/

const onlyLetters = (dom) => {
    let arr = dom.split('')
    for(let i=0; i<arr.length; i++) {
        if(!isNaN(arr[i])) {
           arr[i] = ' '
        }
    }
    return arr.join('')
}
console.log(onlyLetters('domain247coding'))
