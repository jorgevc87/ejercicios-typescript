/*
TypoScript introduces simple type annotation syntax in order to promote
strong typing.
*/

/*

*/
//Java script code - This is correct
/*
var item1 = { id: 1, name: "Item 1" }
item1 = { id: 2 }
*/

//The same example but in TypeScript
//In TypeScript is necessary define what data type shold be
//Any -> allow us assign anything to anything
var item1: any = { id: 1, name: "Item 1" }
item1 = { id: 2 }

















































