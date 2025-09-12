/*
    Sync in Js:
    Synchronous: Synchronous means the code runs in particular sequence of instruction given in program.
    Each instruction wait for the previous instruction to complete its execution

    Asynchronous:
    Due to synchronous programming sometimes imp instructions get blocked due to some prevous instructions
    which causes a delay in the UI. Asynchronous code execution allows to execute next instruction immediately
    and doesnt block the flow
 */

/*
    Below is the example of Asynchronous
*/ 

console.log("One");
console.log("Two");
console.log("Three");

function hello(){
    console.log("Hello");
}
setTimeout(hello,4000)//4s = 4000ms

console.log("Four");
console.log("Five");

/**
 * Callbacks: 
 * Callback hell: Nested callback stacked below one another forming a pyramid structure, such style of programming
                  becomes difficult to understand and manage
 */

function sum(a,b){
    console.log(a+b);
}
function calc(a,b,sumCallback){
    sumCallback(a,b);
}
calc(1,2,sum);

//Callback hell

function getData(dataId,getNextData){
    setTimeout(() => {
    console.log("data",dataId);
    if(getNextData){
        getNextData();
    }
    }, 2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
})
/**
 * Promises: Promises is for "eventual" completion of task. It is an object in JS. It is solution for callback hell.
             let promise = new Promise((resolve, reject)=>{...})
   Promise have 3 states:
   1)Pending
   2)Fullfilled(Resolved)
   3)Rejected
 */
const getPromise=()=>{
    return new Promise((resolve, reject)=>{
        console.log("I am a promise");
        reject("Error");
    });
};
/**
 * .then() is used to handle the result (resolved value) when a Promise is fulfilled.
 * .catch() is used to handle the error (rejection) if the Promise is not fulfilled.
 */
let promise = getPromise();
promise.then((res)=>{
    console.log("Promise fulfilled",res);
});
promise.catch((err)=>{
    console.log("Rejected",err);
})

function asynFunc(){
    return new promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data1");
            resolve("Success");
        }, 4000);
    });
}

console.log("Fetching data....");
let p1 = new promise();
p1.then((res)=>{
    console.log(res);
});