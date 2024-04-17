/*
TypeScript introduces the object type to cover that are not prinitive types.
This includes any type that is not number, boolean, string, null, symbol or undefined

Example:
*/
let structuredObject: object = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
}

function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`)
}

printObjectType(structuredObject)
printObjectType("sdfgehrtrt")



















