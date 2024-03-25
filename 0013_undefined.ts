/*
There are a range of circumstances where the value of something
in javascript is undefined. Let´s take a look at an 
example of this, as follows:
*/

let array = ["123","456","789"]

delete array[0]

for(let i= 0; i < array.length; i++) {
    console.log(`array[${i}]= ${array[i]}`)
}

/*
- we created a variable that holds an array of strings named "array"
- then delete the first element of this array
- we use a simple for loop to loop through elements of this array
- print each element
- you can see the first element is undefined in console
*/


/*
Here we are checking if the array element is, in fact, undefined
*/
function checkAndPrintElement(arrElement: string | undefined) {
    if(arrElement === undefined) {
        console.log(`invalid array element`)
    } else {
        console.log(`valid arrya element: ${arrElement}`)
    }
}

console.log("\n\n\nChecking each value")

for(let i= 0; i < array.length; i++) {
    checkAndPrintElement(array[i])
}






