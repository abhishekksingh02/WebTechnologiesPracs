/**
 * FETCH API
   The Fetch API provides an interface for fetching(sending/recieving) resources
   It uses Request Response obj
   The Fetch() method is used to fetch resources 
   eg: let promise = fetch(url,[options])
 */

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");
const getInfo = async ()=>{
    let promise = await fetch(URL);//We didnt set any options like GET , DELETE hence by default it would be set GET Req
    console.log(promise);
    let data = await promise.json();
    console.log(data);
}
getInfo();
btn.addEventListener("clicks",getInfo);

/**
 * Some imp terms
 1) AJAX is Asynchronous in JS and XML
 2) JSON is JavaScript Object Notation
 3) jscon() : this method returns a second promise that resolves with the result of parsing the
              response body text as JSON.(input is JSON, output is JS obj)
 */