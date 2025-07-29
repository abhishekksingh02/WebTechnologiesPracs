/*------------------------------------------FUNCTIONS AND METHODS IN JS---------------------------------------------------------------*/
//Block of code that performs some specific task is called function, and which can be invoked whenever needed
function myFunc(msg){
    console.log(msg);
}
myFunc("Hello world!");
//Func to add two no
function add(a,b){
    return a + b;
    //No statement returns after return keyword 
    //Function parameters are local variable
}
console.log(add(3,4));

//Subtraction function using Arrow Function: Compact way of writing function
const subtract = (a,b) =>{
    return a - b;
}

const mul = (a,b)=>{
    return a * b;
}

console.log(subtract(5,2));
console.log(mul(3,5));

//Create a function using "function" keyword that takes a String as an arguement and returns the number of vowels in the string
/*
    user input : Hello
    Output would be: 2 as two vowels ie e,o
 */
function countVowels(str){
    //"Abhishek"
    let count = 0;
    for(const char of str){
        console.log(char);
        if(char=="a" || char == "e" ||char == "i" ||char == "o" || char == "u" && char == "A" ||char == "E" ||char == "I" ||char == "O" ||char == "U" ){
            count++;
        }
    }
    console.log("No of vowels in string Abhishek is: ",count);
}
console.log(countVowels("Abhishek"));