//we can perform currying using two concepts --- first one is bind method and second one is closure.



//Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument

let multiply = function(x,y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(4); //8

//this multiplyByTwo method will act as same like below function

// let multiplyByTwo = function (y) {
//     let x = 2;
//     console.log(x * y);
// }



//Second method we can use colsure

let add = function(x) {
    return function(y) {
        console.log(x + y);
    }
}


let addition = add(2);

addition(3);
let 