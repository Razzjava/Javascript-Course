// If Statements

let age = 17;

if (age >= 18){
    console.log("you can vote")
} else {
    console.log("you cannot vote")
}

// else if

if (age >= 18){
    console.log("you can vote")
} else if(age >= 21){
    console.log("you can buy alcohol")
} else {
    console.log("you cannot do either")
}

// logical opertors: AND, OR, NOT
let age1 = 22
let hasID = true

if (age1 >= 21 && hasID){
    console.log("you can enter the club")
}else {
    console.log("you cannot enter the club")
}

// Or Operator
let age2 = 17
let hasPermission = true

if (age2 >= 18 || hasPermission){
    console.log("you can attend the event")
}else {
    console.log("you cannot attend the event")
}

// Not ! operator

let isRaining = false

if(!isRaining){
    console.log("lets go for a walk")
} else {
    console.log("lets stay inside")
}
