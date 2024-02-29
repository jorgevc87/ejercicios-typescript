/*
Enums are a special type whose concet is similar to other languages such as C#,
C++ or Java, Enums are used to define a human-readable name for a specific 
number or string.
*/

enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log("--------checkDoorState--------")
    console.log(`enum value is: ${state}`)

    switch (state) {
        case DoorState.Open:
            console.log("Door is open")
            break

        case DoorState.Closed:
            console.log(`Door is closed`)
            break
    }
    console.log("--------------")
}

checkDoorState(DoorState.Closed)
checkDoorState(DoorState.Open)


/* Enums with a specific value for each key */
enum DoorSpecificState {
    Open = 3,
    Closed = 7,
    Unspecified = 256
}

function checkDoorSpecificState(state: DoorSpecificState) {
    console.log("--------checkDoorSpecificState--------")

    console.log("enum value is: " + state)

    switch (state) {
        case DoorSpecificState.Open:
            console.log("Door is Open")
            break
        case DoorSpecificState.Closed:
            console.log("Door is Closed")
            break
        case DoorSpecificState.Unspecified:
            console.log("Door´s state is Unspecified")
            break
    }

    console.log("--------------")
}


checkDoorSpecificState(DoorSpecificState.Open)
checkDoorSpecificState(DoorSpecificState.Closed)
checkDoorSpecificState(DoorSpecificState.Unspecified)

/*
Strings enums
The numerical values for each key is replaced by string values
*/

enum DoorStateString {
    OPEN = "Open",
    CLOSED = "Closed",
}

//printing the Open string value of the enum
console.log("String enum -> OPEN = " + DoorStateString.OPEN)

/*
Const Enums
The final variant of the enum family is called the CONST ENUM, wich adds the CONST keyword
before the ENUM Definition, as follows:
*/
const enum DoorStateConst {
    Open = 10,
    Closed = 20
}

console.log("Const Closed value = " + DoorStateConst.Closed)







