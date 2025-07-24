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
*/

let foodItems = ["Apple","Orange","Mango","Litchi"];
foodItems.push("Potato");
console.log(foodItems);

let items = ["Delhi","Ahmedabad","Rajkot","Sabarmati"];
items.pop();
console.log(items);
console.log(items.toString());
