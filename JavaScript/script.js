/*Operators in js
  +,-,*,/  : They are called Arithmatic operators
  Modulus : % (Return the reminder of whatever is in modulus)
  Exponential: ** (Returns the exponential value)
  Increement: ++
  Decreement: --

*/
/*let a=10;
let b = 10;
console.log("a = ", a , "and" , "b = ", b)
console.log("Addition of a and b is: ",a+b);
console.log("Subtraction of a and b is: ", a-b);
console.log("Multiplication of a and b is: ", a*b);
console.log("Division of a and b is: ",a/b);
console.log("Modulus of a and b is: ", a%b);
console.log("a**b",a**b);

//Comparision operators
let c=5;
let d=5;
let e="5";
console.log("d==e",d==e);//It will return true becoz in js first it will convert it into a number and then it will compare.
console.log("d==e",d===e);//It will check the data types as well so in this it will return false
*/
// /Logical Operators
/*
    Logical AND &&:
    True, True = True
    True, False = False
    False, True = False
    False, False = False

    Logical OR ||
    True, True = True
    True, False = True
    False, True= True
    False, Flase = False

    Logical NOT ! 
    
 */

//Conditional Statements:
//let age=25;
// if(age>18){
//     console.log("You can vote");
// }
// else{
//     console.log("You cannot vote");
// }

//Ternary operator: condition?true output : false output
//let ans = age>18?"You can vote":"You cannot vote"; 
// console.log(ans);

//Practice question:
// alert("Hello from using alert in JS");
// let tempMsg = prompt("Type any number to check whether it is multiple of 5 or not"); //prompt in JS takes input 
// if(tempMsg%5==0){
//   console.log(tempMsg, "is a multiple of 5");
// }
// else{
//   console.log(tempMsg, "is not a multiple of 5");
// }

//Ques: Write a code which can give grades to students acc to their marks
/*
     90-100: A
     70-89: B
     60-69: C
     50-59: D
     0-49: F
 */
/*let stuScore = prompt("Enter student score to check Grade:")

if(stuScore>=90 && stuScore<=100){
  console.log("Your grade is: A");
}
else if(stuScore>=70 && stuScore<=89){
  console.log("Your grade is: B");
}
else if(stuScore>=60 && stuScore<=69){
  console.log("Your gradre is: C");
}
else if(stuScore>=50 && stuScore<=59){
  console.log("Your grade is: D")
}
else if(stuScore>=0 && stuScore<=49){
  console.log("Your grade is: F")
}
else{
  console.log("ENTER VALID MARKS!!!!");
}*/

console.log("Hello");
// alert("Hello This is Abhishek");
// console.log(window);

/**
 * Window object: 
   This window obeject represent open window in a browser. It is browsers object(not JS)
   and is automatically created by browser. It is global object with lots of properties and methods.

   When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.

   console.log() --> To print normal debugs
   console.dir() --> To print the document and properties of method
   
   DOM Manipulation
   1) Selecting with id:
   --> document.getElementById("myId")
   2) Selecting with class:
   --> document.getElementByClassName("myClass")
   3) Selecting with tags:
   --> document.getElemtByTagName("p")
 */

  // let heading =  document.getElementById("Heading");
  // console.dir(heading); //if no element id present and if we try to access them it will print null

  // let heading2 = document.getElementsByClassName("Heading-Class");
  // console.dir(heading2); //getElementByClassName prints in array, let's suppose we try to access class which is not present it will print length = 0

  let paragraph = document.getElementsByTagName("p");
  console.dir(paragraph);

  let firstEl = document.querySelector("p"); // querySelector returns NodeLists
  //querySelector return the first element 
  console.dir(firstEl);

  let allEl = document.querySelectorAll("p"); //querySelectorAll returns each and every element
  console.dir(allEl);

  let classFirst = document.querySelectorAll(".Heading-Class"); //querySelectorAll returns each and every element
  console.dir(allEl);

  let classAll = document.querySelectorAll(".Heading-Class"); //querySelectorAll returns each and every element
  console.dir(classAll);