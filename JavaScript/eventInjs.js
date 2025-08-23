//Events in Js

// let btn1 = document.querySelector("#btn");
// // btn1.onclick = () =>{
// //     console.log("Button 1 clicked");
// // };

// let box = document.querySelector("#box");
// box.onmouseover = () =>{
//     console.log("You just visited div");
// };

// //Event Listners in Js

// btn1.addEventListener("click",() => {
//     console.log("Button 1 was clicked.");
// });

// btn1.addEventListener("click",() => {
//     console.log("Button 1 was clicked handler 1.");
// });

// const handler3 = () =>{
//     console.log("Button 1 was clicked handler 3.");
// }
// btn1.addEventListener("click" , handler3);

// btn1.addEventListener("click",() => {
//     console.log("Button 1 was clicked handler 4.");
// });

// btn1.removeEventListener("click", handler3);

let modbtn = document.querySelector("#btn");
let currentMode = "light" 
modbtn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
    }
    else{
        currentMode="light";
        // document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
    }
    console.log(currentMode);
})
