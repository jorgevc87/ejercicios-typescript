/*
TypeScript introduces the concept of a type alias, where can create a named type that 
can be used as a substitute for a type union. Type aliases can be used wherever normal
types are used and are denoted by using the type keyword in this case
*/
type StringOrNumber = string | number //Definig the type alias named StringOrNumber

function addWithTypeAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    return arg1.toString() + arg2.toString()
}

/*
Type aliases are a handy way of specifyng a type union and giving it a name, and are 
particularly useful when the type union is used over and over again.
*/

































