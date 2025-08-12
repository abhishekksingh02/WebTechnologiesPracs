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

//forEach loop in Arrays in js
/*
    arr.forEach(callBackFuntion) 
    forEach function can be called Higher order functions or methods as well 
    callBackFunction: here, it is a function to execute for each element in array
    a callBack is a funtion. passed to an arguement to another function
    eg: arr.forEach((val) =>{
        console.log(val);
     })  
        forEach in JS is also known as Higher Order Function
 */
let arr = ["Pune","Delhi","Mumbai"];
arr.forEach((val, idx)=>{
    console.log(val.toUpperCase(),idx); 
});

let arrToPrint = [1,2,3,4,5];
arrToPrint.forEach((num)=>
{
    console.log(num*num);
})
/* 
    Map: Creates a new array with the results of some operation. The value its callback returns are 
    used to form new array    
*/
let arr2 = [1,2,3,4,5,6,7,8,9];
arr2.map((val2)=>{
    console.log(val2);

})
let evenNum = arr2.filter((val2)=>{ //Filter: creates a new array of elements that give true for a condition/filter.    
    return val2 % 2 == 0;
})
console.log(evenNum);

const array1 = [80,55,59,94,99];
const initialVal = 0;
const sumWithInitial = array1.reduce((res , val)=>{ // reduce: Performs some operation and reduces the array to a single val. It returns that single val
    return res + val;
})
const maxDigit = array1.reduce((res, val)=>{
    if(res>val){
        return res;
    }
    else{
        return val;
    }
})
console.log(sumWithInitial);
console.log(maxDigit);

//Q: We are given array of marks of students. Filter out the marks of stu that scored 90+
let marksArr = [87,96,99,94,52];
let above90Marks = marksArr.filter((val)=>{
    return val>90;
})
console.log("Above 90 marks are: ",above90Marks.sort());

let n = prompt("Enter a number: ");
let newArr = [];
for(let i=1;i<=n;i++){
    newArr[i-1] = i;
}
console.log(newArr);
const sumOfNewArr = newArr.reduce((resNew,valNew)=>{
    return resNew+valNew;
})
console.log("Sum of array is:", sumOfNewArr);
const mulOfNewArr = newArr.reduce((mulNew,mulVal)=>{
    return mulNew * mulVal;
})
console.log("Multiplication of array is:",mulOfNewArr);