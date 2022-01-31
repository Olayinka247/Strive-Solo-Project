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