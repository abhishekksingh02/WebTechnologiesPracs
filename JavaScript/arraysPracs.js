/*------------------------------------------ARRAYS IN JS---------------------------------------------------------------*/
/*
    Arrays: Collection of same tyep of items
    eg: let stuMarks = [97,85,56,87,89];
        let stuNames = ["Abhishek","Raj","Manan","Vishal"];
        let info = ["Raj",97,"Delhi"];//Though we can add diff types of info but we should avoid creating such arrays
 */
let stuMarks = [97,85,56,87,89];
console.log(stuMarks);
console.log(stuMarks.length);//It will print the lenght of array basically it is one the properties of array

//Array indices
let arr = "Abhishek";
console.log(arr[0]);

//Looping over array, finding average marks of given array
let arr1 = [85,97,44,37,76,60];
let averageMarks = 0;
for(let i=0;i<arr1.length;i++){
    averageMarks+=arr1[i]/arr1.length;
}
console.log("Average marks is: ",averageMarks);

/*For a given array with prices of 5 items -> [250,645,300,900,50] 
  All items have an offer of 10% OFF on them. Change the array to store final price after applying offer
*/
let arr2 = [250,645,300,900,50];
// let finalValue = 0;
for(let i=0;i<arr2.length;i++){
    let offer = arr2[i]/10;
    arr2[i] -= offer;    
}
console.log(arr2);

//Array methods:
/*
    Push() : add to end
    Pop() : delete from end and return
    toString() : converts array to string
    concat() : joins multiple arrays and return result
    unshift() : add to start
    shift() : delete from start and return 
    slice() : return the piece of an array slice(startIdx, endIdx)
    splice(): change original array (add,remove,replace) 
*/
//Push eg
let foodItems = ["Apple","Orange","Mango","Litchi"];
foodItems.push("Potato");
console.log(foodItems);
//Pop eg
let items = ["Delhi","Ahmedabad","Rajkot","Sabarmati"];
items.pop();
console.log(items);
console.log(items.toString());
//concat eg
let marvelHeroes = ["Thor","SpiderMan","ShaktiMan","Bheem"];
let DC = ["SuperMan","BatMan"];
console.log(marvelHeroes.concat(DC));
//unshift eg
console.log(marvelHeroes.unshift("AntMan"));
//shit eg
let val = marvelHeroes.shift();
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));//Last index is non inclusive in slice method

let no = ["1","2","3","4","5","6","7"];
no.splice(1,2,101,102);
console.log(no); //Output: ['1','101','101','4','5','6','7']

//Practice Question
/*
    ->Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
    a) Remove the first company from the array
    b) Remove uber and add ola at its place
    c) Add amazon in the end
 */

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(bigSix);
// companies.splice(2,1,"ola"); // second index par jana hain, wohi index delete karni hain, aur "ola" se replace karna hain
// console.log(bigSix);

companies.push("Amazon");
companies.log(companies);

