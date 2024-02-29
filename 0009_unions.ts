/*
TypeScript allow us to express a type as a combination of two or more
other types. These types are known as union types, and they use the pipe 
simbol ( | )
*/

function printObject(obj: string | number) {
    console.log("obj: " + obj)
}

printObject(1)
printObject("string value")



















