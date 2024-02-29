/*
Duck tipymg

TypeScript also uses a method called duck typing for more complex variable

"If looks like a duck, and quacks lick a duck, then probably is a duck"
In other words, two variables are considered to have the same type if have 
the same variables and methods

*/

var nameIdObject = { name: "myName", id: 1, print() { } }

nameIdObject = { id: 2, name: "anotherName", print() { } }


/*
As we can see, the object "nameIdObject" has an name property,
an id property, and a print function, then "nameIdObject" only
can receive and object with the same structure, id, name and print function
*/

//nameIdObject = {id: 3, name: "thirdName"} 
/*print function is missing, then this will 
generate an compilation error*/


//another example.....
var obj1 = { id: 1, print() { } }
var obj2 = { id: 2, print() { }, select() { } }

obj1 = obj2 // No error, because obj2 has the same the properties and methods of obj1

//obj2= obj1 // Error, Obj1 has not select method







