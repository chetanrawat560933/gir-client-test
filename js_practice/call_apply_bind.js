// let name = {
//     firstname: "Chetan",
//     lastname: "Rawat",
//     printFullName: function () {
//         console.log(this.firstname+ " " +this.lastname);
//     }

// }

// console.log(name.printFullName());


// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",

// }

// //function borrowing 

// console.log(name.printFullName.call(name2)); //Sachin Tendulkar



// let name = {
//     firstname: "Chetan",
//     lastname: "Rawat",
//     printFullName: function () {
//         console.log(this.firstname+ " " +this.lastname);
//     }

// }

// console.log(name.printFullName());


// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",

// }

// //function borrowing 

// console.log(name.printFullName.call(name2)); //Sachin Tendulkar

//In JS functions are object methods
//If a function is not a method of javascript object, it is a function of global object
//with call() method, you can write a method that can be used on different objects

let name = {
    firstname: "Chetan",
    lastname: "Rawat"
}

let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}

printFullName.call(name,"Chandigarh", "UT");

//in call any paramter for the function, we have to pass through comma seprated.


let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}


printFullName.call(name2,"Dehradun", "Uttrakhand");

printFullName.apply(name2,["Mumbai", "Maharashtra"]);


//diff between apply and call is that from second to n argument , we pass it in array. // so in apply i guess there will be only 2 arguments.


//bind method --it creates the copy and returns the method which we can call it later.

printFullNamecopy = printFullName.bind(name2,["jaipur", "Rajasthan"]);

//if we console log printFullNamecopy

console.log(printFullNamecopy);

printFullNamecopy();













