/*-----------------------------------------CONDITIONAL LOOPS AND OPERATORS IN JS-------------------------------------------*/
// for(let i=1;i<=5;i++){
//     console.log("Abhishek Singh");
// }

// //For loop to print sum of 1 to 5
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum +=i;
// }
// console.log("Sum of 1 to 5 is: ", sum);

//While loop in JS
// let i=1;
// while(i<=5){
//     console.log("i = ",i);
//     i++;
// }

/* Key diff between while and do while loop is that in while loop we check condition at first place
only whether in do while loop condition is check later means that do while loop run for atleast once unlike while loop */

//do-while loop
// let i=20;
// do{
//   console.log("Abhishek singh");
//   i++;
// }while(i<10); //This loop will print Abhishek Singh for once becoz of do while loop.

//for-of loops
/*
  for(let val of strVal){
    logic...
  }
 */

//   let str = "Abhishek Singh";
//   for (let i of str) {
//     console.log("i=",i);
//   }

/*  for in loop
    we use this type of loop for objects
 */

// let studentInfo = {
//     stuName: "Abhishek Singh",
//     age: 20,
//     cgpa: 9.6,
//     isPass: true,
// };

// for (const Key in studentInfo) {
//     console.log("key=",Key,"Value=",studentInfo[Key]);
// }

//Practice question:

//Print all even num from 0 to 100
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
    
// }

//Create a game where you start with any random game number. Ask user to keep guessing the game number until the user enters correct value
// let gameNumber = 25;
// let userGuessed = prompt("Guess the game number: ");
// // console.log(userGuessed);
// while(userGuessed != gameNumber){
//     userGuessed = prompt("You entered wrong number. Guess again!");    
// }
// prompt("Congratulations you guessed it correct!!");


//Strings in JS
/*
    String is a sequence of characters used to represent text 
    also in JS STRINGS ARE IMMUTABLE
    A)Defining string:
    let str = "Abhishek Singh";
    let str2 = 'Abhishek Singh';
    B)To find length of string use  : str.length
    C)To find indices of string use : str[0],str[1],str[2]
    D)str.toUpperCase() : use to convert string into uppercase
    E)str.toLowerCase() : use to convert string into lowercase
    F)str.trim() : use to remove whitespaces
    G)str.slice(start,end?): Returns part of String
    H)st1.concat(str2): use to concate two stirngs
    I)str.replace(searchVal,newVal)
    J)str.charAt(idx)
 */

    let str = "Abhishek singh";
    let str2 = "012345";
    console.log("Length of",str,"is:",str.length);
    console.log("At indice 0 character is:",str[0]);
    console.log(str.trim( ));
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str2.slice(1,6)); // in slice funuction it will not include the end value 
    console.log(str.concat(str2));
    console.log(str.replace("s","S"));
    console.log(str.charAt(0));

/*  
    Template Literals in JS:
    ->A way to  have embedded expressions in strings
    eg. `this is a template literal` 
*/
let sentence = `This is a template literal`;
console.log(typeof(sentence));

let obj={
    item : "pen",
    price : 10,
};
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);//With the use of template literals we can write our variable with string

// \n is called escape character use for new line
// \t is used for tap space 

/*   
    Practice question:
    A)Prompt user to enter their full name. Generate a username for them based on the input. Start username 
    with @, followed by their full name and ending with fullname length.
    eg. user name = "abhisheksingh" , username should be : @abhisheksingh13
 */

    // let userInput = prompt("Enter username :")
    // let toAddfirst = "@";
    // console.log("New username is:",toAddfirst.concat(userInput).concat(userInput.length));


 /*
    1)Reverse a string
    2)Check for palindrome
    3)Count the number of vowels in a string
    4)Capitalize the first letter of a sentence
    5)Capitalize the first letter of each word
    6)Replace all spaces with hyphens
    7)Check if a string contains another string
    8)Trim white spaces from both ends
    9)Repeat a string n times : Input: "ha", 3 → Output: "hahaha"
    10)Count how many times a character appears : Input: "banana", "a" → Output: 3
 */

//1)
let toReverseString = "Abhishek"
console.log("Original string is:",toReverseString)
const reversedString = toReverseString.split('').reverse().join('');
console.log("Reversed string is:",reversedString);

//2)
let tempStr = "abhishek";
let vowels = "aeiouAEIOU";
let count = 0;
for(let i=0;i<tempStr.length();i++){
    if(vowels.includes(tempStr[i])){
        count++;
    }
}
console.log("Number of vowels are: ",count);