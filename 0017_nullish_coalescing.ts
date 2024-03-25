/*
As we have just seen, it is a good idea to check that a particular variable is not either
null or undefined before using it, as this can lead to errors. Typescript allows us to use a
feature of the 2020 Javascript standar called nullish coalescing, which is a handy 
shorthand that will provide a default value if a variable is either null or undefined.
Consider the following code:
*/

function nullishCheck(a: number | undefined | null) {
    console.log(`a: ${a ?? `undefined or null`}`)
}

nullishCheck(1)
nullishCheck(null)
nullishCheck(undefined)














