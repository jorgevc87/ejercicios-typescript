/*
Theis technique is used to copy the properties from one objectt
to another, or do some mixing and matching of properties from 
various objects. 
Typescript, we can use an ES7 technique know as object spread to
accomplish this. Conside the following code
*/

let firstObj: object = { id: 1, name: "firstObj" }

let secondObj: object = { ...firstObj }

console.log(`secondObj: ${JSON.stringify(secondObj)}`)
/*
Here, we have defined a variable named firstObject that is of type object and has an 
id property and name property. We the define a variable named secondObj and
use the object spread syntax of three dots ( ... ) to assign a value to it. The value
we are assigning is an object that is made up of the firsatObj variable, that is 
{ ...firstObj }. The output of this code the same of firstObj.
*/

//We also can mix objects
let nameObj: object = { name: "nameObj name" }
let idObj: object = { id: 1 }

let obj3 = { ...nameObj, ...idObj }

console.log(`obj3: ${JSON.stringify(obj3)}`)

/*
This output shows us that properties of both objects have been merged into the obj3
variable, using the object spread syntax.
*/

//Spread precedence
/*
If two objects have a field with the same name, then el value of that field
in the mixed object has the last value setted
*/

let objPrec1: object = { id: 1, name: "obj1 name" }
let objPrec2: object = { id: 10001, desc: "obj2 description" }

let objPrec3 = { ...objPrec1, ...objPrec2 }

console.log(`objPrec3: ${JSON.stringify(objPrec3)}`)

/*
Here we have two objects with the same field: id
*/




