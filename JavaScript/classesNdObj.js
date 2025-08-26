// //Prototype in JS
// //A js object is an entity having state and behavior, js obj have a special property called prototype
// //We can set prototype using __proto__
// const stu = {
//     fullName: "Abhishek",
//     marks : 99.4,
//     printMarks: function(params) {
//         console.log("Marks = ",marks);
//     },
// };

// const employee = {
//     calctaxForEmp(){
//         console.log("Tax deduction of employee is 10%");
//     }
// };
// const karanEmp = {
//     salary : 50000,
// };
// karanEmp.__proto__ = employee;

// /*
// Classes in Js
// Class is a program-code template for creating obj
// Those obj will have same variables and some behaviour inside it 
// */
// class totyotaCars{
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
// }
// let fortuner = new totyotaCars();
// //Inheritance in JS
// //Inheritance is passing down properties and methods from parent class to child class
// //Method overriding: if child nd parent have same method, child's method will be used
// /*Super Keyword: The super keyword is used to call the constructor of its parent class to access the parent's
// propertoes and methods*/
// class parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class newParent extends parent{}
// const obj = new newParent();
// obj.hello();

// class person{
//     constructor(){
//         this.species = "Homo sapiens";
//     }
//     eat(){
//         console.log("Eating");
//     }
//     sleep(){
//         console.log("Sleeping");
//     }    
// }
// class engineer extends person{
//     constructor(){
//         super();//to invoke parent class constructor
//         this.branch = branch;
//     }
//     work(){
//         console.log("Solving problems");
//     }
// }

// let engobj = new engineer("Electrical Engineer");

class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewWebData(){
        console.log("This is Website Data");
    }
}
class admin extends user{
    constructor(name,email){
        super(name, email);//to invoke constructor of parent class
    }
    editData(){
        console.log("Admin can edit user");
    }
}
let stu1 = new user("Abhishek","abc@gmail.com");
let stu2 = new user("Testing","abc@gmail.com");
let stu3 = new user("ThirdUser","abc@gmail.com");
let admin1 = new admin("Admin","admin@gmail.com");

