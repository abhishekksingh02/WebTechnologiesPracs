//JavaScript is dynamically typed language
console.log("Welcome, Abhishek Singh!");
fullName = "Abhishek singh";
age = 24;
price = 30.44;
x = null; // null has special value basically it is empty 
y = undefined;
console.log(fullName);

console.log(y);
console.log(x);

//let,const,var
//var: variable can be re-declared and updated, basically a global scope variable
//let: variable cannot be re-declared but can be updated, a block scope variable
//const: variable cannot be re-decalred or updated, a block scope variable

let myName = "Abhishek Singh"
let myAge = 23;
console.log(myName);
console.log(myAge);

const myname = "Anshu"

/*
   Data types in js:
   1) Primitive Data types:
      a)number
      b)String
      c)Boolean
      d)Undefined
      e)Null
      f)BigInt
      g)Symbol
   2) Non Primitive Data tyeps:
      a)Objects : Objects in js is basically collection of values and in objects we save in Key:value pair
      b)Arrays
      c)Functions
*/

console.log(typeof(myName));

const student =  {
  stuName : "Abhishek Singh", // Here stuName is key and "Abhishek Singh" is value
  stuAge : 23,
  cgpa : 6.23,
  isPass : true,
};

console.log(student); 
console.log(typeof(student)); //it will return object as type 
console.log(student["stuName"]);// This way we can access key from objects
console.log(student.stuName);//We can access key from objects this way as well

//Practice of obj
const productDetails = {
    prodName : "Parker Jotter pen gel (Blue pen)",
    prodRating : 4.5,
    prodReviews: 4756,
    isProductOnDeal: true, 
    prodPrice: 759,
    isInStock: true,
};

console.log(productDetails);
console.log(productDetails.prodName);
console.log(productDetails.prodRating);
console.log(productDetails.prodReviews);
console.log(productDetails.isInStock);
console.log(productDetails.prodPrice);
console.log(productDetails.isProductOnDeal);

a=1;
b=1;
console.log(a+b);//here it will add these two values

a="1";
b=23;
console.log(a+b); //here it will concate these two values and return ans as 123

a='1';
b=1;
console.log(a+b);//here it will retun 11 meaning it will simply concate these two values

