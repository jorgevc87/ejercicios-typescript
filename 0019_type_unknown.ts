/*
TypeScript introduces a special type into the basic types, wich is the unknown type.
Unknown is a safe alternative to any.
*/

//Example with any
let a: any = "test"
let aNumber: Number = 2
aNumber = a //any lets this type of assigments


/*
Lets rewrite this code but use the unknown type intead of any type
*/
let u: unknown = "an unknow"
u = 1
let aNumber2: number = 2

aNumber2 = <number> u //explicit casting
















