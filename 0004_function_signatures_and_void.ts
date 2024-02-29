
//Javascript
/*
function calculate(a, b, c) {
    return (a * b) + c
}

console.log("calculate()= " + calculate(2,3,1))  //  -> 7

console.log("calculate()= " + calculate("2","3","1"))  //  -> 61 ...... Error, JavaScript assumes string should be concatenated
*/

//TypeScript
function calculate(a: number, b: number, c: number): number {
    return (a * b) + c
}

console.log(`calculate() = ${calculate(3, 2, 1)}`)

/*
With our function definition now specifying a type for each argument
attempting to call this function with string fail, as follows
*/

//console.log(`calculate()=${calculate("3","4","1")}`) //Error, the function definition restrics


//Function that does not return a value:

function printOnlyStrings(a: string): void {
    console.log(a)
}

// printOnlyStrings(2)  // -> Error
printOnlyStrings("mi cadena")


/*
Error: Beacause printOnlyStrings does not return any value, and "returnedValue"
expects a string value
*/
//var returnedValue :string = printOnlyStrings("this is a string")

















