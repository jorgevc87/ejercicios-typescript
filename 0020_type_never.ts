/*
The final primitive type in typescript collection is a type of never. This
type is used to indicate instances where something should never occur. 
*/

function alwaysTrows(): never {
    throw new Error("this allways will throw")
    return -1 // number is no assignable to never type
}


/*
A more advance use of the never type can bu used to trap logic errors
within errors within switch statements. Consider the following code.
*/

enum AnEnum {
    FIRST,
    SECOND
}

//First version of the code
function getEnumValue_ver1(enumValue: AnEnum): String {

    switch (enumValue) {
        case AnEnum.FIRST: return "First Case"
    }

    let returnValue: never = enumValue

    return returnValue
}

//Second version of the error
function getEnumValue_ver2(enumValue: AnEnum): string {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case"

        case AnEnum.SECOND: return "Second Case"
    }

    let returnValue: never = enumValue

    return returnValue
}
/*
Here, we have simply added the missing case statement to handle the AnEnum.SECOND value.
With this in place, the error is resolved. While this may be fairly easy to spot in a
simple example like this, this sort of error is commomplace when working with large code 
bases 
*/










































