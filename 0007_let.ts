/*
var index: number = 0;

if (index == 0) {
    var index: number = 2;
    console.log("index= " + index)
}

console.log("index= " + index)
*/

/*
It´s the best practice use the let keyword to define variables, and not to use 
the var keyword at all. By using let, we are being more explicit about the intended
use of these variables, which will help the compiler to pick up any mistakes
in our code where these rules are broken.
*/

//ES6
let index: number = 0

if (index == 0) {
    let index: number = 2
    console.log("index= " + index)
}

console.log("index= " + index)

































