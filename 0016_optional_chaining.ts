/*
When using object properties in javascript, and in particular nested properties, it 
is important to ensure that a nested property exists before attempting to access it. Consider
the following javascript code:
*/

var objectA = {

    nestedProperty: {

        name: "nestedPropertyName"

    }

}


/*
function printNestedObject(obj) {
    console.log("obj.nestedPropertyName= " + obj.nestedProperty.name)
}


- Here we have an object named objectA that has a nested structure. It has a single
  property named nestedProperty, wich holds a child object with a singles property called
  name. We then have a function called printNestedObject that has a single parameter
  named obj, which will log the value of the obj.nestedProperty.name property to the console

*/


//Typescript version:
function printNestedObject(obj: any) {
    if (obj != undefined && obj.nestedProperty != undefined && obj.nestedPropertyName) {
        console.log(`name = ${obj.nestedPropertyName.name}`)
    } else {
        console.log(`name not found or undefined`)
    }
}

//Optional chaining
/*
Here, we have a function name printNestedOptionalChain that has exactly the same functionality
as our previous printNestedObject function.The only difference is that the
previous if statement, which consisted of three lines, is now reduced to one line.
Note how we are using the ?. syntax in order to access each nested property. This has the
effect that if any one of nested properties returns null or undefined, the entire
statement will return undefined.
*/
function printNestedOptionalChain(obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedPropertyName.name}`)
    } else {
        console.log(`name not found or undefined`)
    }
}

//testing / trying
printNestedOptionalChain(undefined)

printNestedOptionalChain({
    aProperty: "another property"
})

printNestedOptionalChain({
    nestedProperty: {
        name: null
    }
})

printNestedOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
})


















