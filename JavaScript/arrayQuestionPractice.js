/*
    Print all elements of an array using a loop
    Input: [1, 2, 3, 4] → Output: 1 2 3 4

    let inPut = ["1","2","3","4"]
    for(let i=0;i<=inPut.length;i++){
        console.log(inPut[i]);
    }
 */

/*
    Find the sum of all elements in an array
    Input: [10, 20, 30] → Output: 60

    let inPut = [10,20,30];
    sum = 0;
    for(let i=0;i<inPut.length;i++){
    sum += inPut[i];    
    }
    console.log("Sum:",sum);
 */

/* 
    Find the largest number in an array
    Input: [12, 45, 7, 89, 34] → Output: 89

    let number = [10,20,30,40,50];
    const greatesNumber = Math.max(...number);
    console.log("Greatest number is: ",greatesNumber);
 */

/* 
    Count how many even numbers are in an array
    Input: [1, 2, 3, 4, 6] → Output: 3
 */
let arr = [1,2,3,4,6];
let no=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    no++;
  }
  
}
console.log("No of even numbers in array is:",no);

/*
    Check if a specific element exists in an array
    Input: "apple" in ["mango", "banana", "apple"] → Output: true
 */
let fruits = ["mango","banana","apple"];
let toCheck = fruits.includes("apple");
console.log(toCheck);





