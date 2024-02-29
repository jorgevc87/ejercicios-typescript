/* Type Guards */

/*
When working with union types, the compiler will still apply its strong typing rules to 
enseure type safety. As an example of this, consider the following code
*/
function addWithUnion(
    arg1: string | number,
    arg2: string | number
) {
    //return arg1 + arg2  // This give us an error
}

/*
The compiler is telling us here is that it cannot tell what type it should use
when it attemps to add arg1 to arg2. Is it supposed to add astring to a number, or a 
string to a string?
*/

//There is another example
function addWithTypeGuartd(
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === "string") {
        //arg1 is treated as a string
        console.log("arg1 if of type string")
        return arg1 + arg2
    }

    if (typeof arg1 === "number" && typeof arg2 === "number") {
        //both are numbers
        console.log("arg1 and arg2 are numbers")
        return arg1 + arg2
    }

    console.log("default return treat both as string")
    return arg1.toString() + arg2.toString()
}


console.log(`"1", "2" = ${addWithTypeGuartd("1","2")}`)
console.log(`1, 2 = ${addWithTypeGuartd(1,2)}`)
console.log(`1, "2" = ${addWithTypeGuartd(1, "2")}`)
console.log(`"1", 2 = ${addWithTypeGuartd("1", 2)}`)


























