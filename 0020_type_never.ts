/*
The final primitive type in typescript collection is a type of never. This
type is used to indicate instances where something should never occur. 
*/

function alwaysTrows() : never {
    throw new Error("this allways will throw")
    return -1 // number is no assignable to never type
}


/*
A more advance use of the never type 

*/

































