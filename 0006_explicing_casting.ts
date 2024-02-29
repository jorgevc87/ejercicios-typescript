/*
Let´s rewrite out  previous example using explicit casting, as follows:
*/

//1. Here we are casting to any data type
var item1 = <any>{ id: 1, name: "item1" }
item1 = { id: 2 }

//2. This is another way to casting an object as any
var item2 = { id: 3, name: "item2" } as any
item2 = { id: 4 }

//No matter wich one of that example we use, is the same result

//Here we are defining the variable as any
var item3: any = { id: 5, name: "item3" }
item3 = { id: 6 }

