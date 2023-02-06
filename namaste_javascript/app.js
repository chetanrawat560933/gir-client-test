//let and const are block scoped , var is not block scoped.

// let a = 10;

// {
//     let a =100
//     console.log(a); // output 100
// }

// console.log(a); ---output 10

// var a = 10;

// {
//     var a = 20;
//     console.log(a); // output 20
// }

// console.log(a); //output 20

// {
//     var a =10;
//     let b = 20;
//     const c =30;

// }

// console.log(a);
// console.log(b); //getting reference error, not defined

//Shadowing Example

// var c =100;

// function x() {
//     var c = 30;
//     console.log(window.c); //1--
//     window.c = 20;
// }

// x();
// console.log(c) //20

//-------------------------------------CLOSURES----------------------------------------------

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }

//     return y;
// }

// var z = x();
// console.log(z); //7

// function z() {
//     var b = 900;
//     function x() {
//         var a =7;
//         function y() {
//             console.log(a,b); // 7,100
//         }
//     }
// }

//////////////////////////////Set timeout //////////////////////////////////////////

// function x() {
//     var i = 1;
//     setTimeout(function () {
//         console.log(1);
//     }, 3000);

//     console.log("Chetan");
// }

// x(); // First Chetan would be printed and then it would be 1

//---------------------Set timeout and closure question ////

// function x() {

//     for (var i =1 ; i<=5; i++) {

//             setTimeout(function () {
//                   console.log(i);
//             }, i * 1000);
//     }

//     console.log("Chetan Rawat");
// }

// x(); // output -- 6,6,6,6,6

// //to overcome above , we can replace var with let

// function x() {

//     for (let i =1 ; i<=5; i++) {

//             setTimeout(function () {
//                   console.log(i);
//             }, i * 1000);
//     }

//     console.log("Chetan Rawat");
// }

// x();

// function x() {
//     for (var i =1 ; i<=5; i++) {
//         function close(y) {
//             setTimeout(function () {
//                   console.log(y);
//             }, y * 1000);
//         }
//         close(i);
//     }

//     console.log("Chetan Rawat");
// }

// x();

/////--------------Example------------////

// function outest() {
//     var c = 20;

//     function outer(b) {
//         function inner() {
//             console.log(a,b,c);
//         }

//         let a =10;
//         return inner;
//     }
//     return outer
// }

// var close = outest();

// var x = close("Hi There");

// var y = x();

// console.log(y);  // 10, 'Hi there', 20

//We can replace above by i mean for var close to console.log(y)

///Also, even if i declare a variable 100, then also it will print 10 only for a

// let a =100;
// var close = outest()("Hi There");

// close();

//Data hiding example with closure
//In below example we can see that anyone can access counter variable and can change it.

// var counter =0;

// function incrementCounter() {
//     counter++;
// }

//We can use this closure for the above code

// function counter() {
//     var count =0;
//     function incrementCounter() {
//         count++;
//         console.log(count);
//     }
//     return incrementCounter;
// }

// // console.log(count); // we can not access this

// var a = counter();

// a();
// a();

// from First Class function video

// a();
// b(); // it will give an error, as b is variable and it will still be undefined initially before declaration

// //Function Statement aka Function Declaration
// function a() {
//     console.log("A Called");
// }

// //Function Expression

// var b = function() {
//     console.log("B called");
// }

//The major difference between Function statement and function declaration is hoisting.
// anonymous and arrow functions are never hoisted in JavaScript.

//Anonymous Functions are used in a place where functions are used as values. We can not use Anonynmous function in function statement

//Named function Expression

// var yy = function xyz() {
//     console.log("B called");
// }

//if we call xyz(); directly what would be the output ---> It will give an error.

//First Class Functions -- Ability of the functions to be used as value passed to other function or returned from other functions

/*Anonymous functions are functions that are dynamically declared at runtime.

They’re called anonymous functions because they aren’t given a name in the same way as normal functions.

Because functions are first-class objects, we can pass a function as an argument in another function and later execute
 that passed-in function or even return it to be executed later.This is the essence of using callback functions in JavaScript. */

// var zz = function(param1) {
//     console.log(param1) // f () {}
// }

// zz(function () {

// });

// //Another Example

// var xx = function (param1) {
//     console.log(param1) // f xxx() {}
// }

// function xxx() {

// }

// xx(xxx);

// setTimeout(function () {
//     console.log("Timer")
// }, 5000);

// function x(y) {
//     console.log("x")
//     y();
// }

// x(function y() {
//     console.log("y");
// });

//Whatever is executed on your page, it is executed through one call stack only

//Web API's , callbacks and setTimeout we can perform asynchronous with javascript

// document.getElementById("clickMe") //as soon as the button is clicked, the function aaa will be in the call stack
// .addEventListener("click", function aaa() {
//     console.log("Button Clicked")
// });

//we need to count how many times button is clicked

// let count = 0;

// document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked", ++count);
// });

//But above is not the right method  as we are using variabe which we declared globally, lets do it with closure

// function attachEventListner() {
//     let count =0;

//     document.getElementById("clickMe")
//     .addEventListener("click", function xyz() {
//         console.log("Button Clicked", ++count);
//     });
// }

// attachEventListner();

/*Garbage collection and removeEvenListner,for above example, even if we are not using the count variable, we can not free it 
as we will be needing it if we click the button, so unneccessary we have to keep it hold }, if we had so many event listner
then there would be difficulty */

//-------------------------------------High Order Functions------------------------------

const radius = [3, 1, 2, 4];

//Function for calculating Area for circle

// const calculateArea =  function (radius) {
//     const output = [];

//     for (let i =0; i< radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }

//     return output;
// }

// console.log(calculateArea(radius));

/// For Circumference

// const calculateCircumference =  function (radius) {
//     const output = [];

//     for (let i =0; i< radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }

//     return output;
// }

// console.log(calculateCircumference(radius));

//Now what we can do is  we can calculate area using much more concrete way

// const area = function (radius) {
//     return Math.PI * radius * radius;
// }

// const circumfrence = function (radius) {
//     return 2 * Math.PI * radius;
// }

// const calculate = function (radius, logic) {
//     const output = [];

//     for (let i =0; i < radius.length; i ++) {
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

// console.log(calculate(radius, area));

// console.log(calculate(radius,circumfrence));

//now we will use the same technique for circumference

///----------------MAP FUNNCTION-----------------

// const arr = [5,3,1,2,6];

// const output = arr.map((x) => x.toString(2)); // (x) => x.toString(2) is applied to all the elements of arr Array.

// console.log(output);

//--------------FILTER FUNCTION IS USED to filter out THE ARRAY----------------------------

// const arr = [5,1,3,2,6]

// //filtered odd values

// const output = arr.filter((x) => {
//     return x > 4;
// })

// console.log(output);

///---------------------------------We are now going to use reducer function in tha arrays--------

const arr = [5, 1, 3, 2, 6];

// function findSum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
// }

//The above findSum code will give us the similar relation to

const output = arr.reduce(function (acc, curr) {
  // curr will be the current arr value

  acc = acc + curr;
  return acc;
}, 0);

console.log(output);

function findMax(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log("Chetan");
console.log(findMax(arr));

const arr1 = [5, 3, 8, 9, 1];

const output1 = arr1.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }

  return acc;
}, 0);

console.log(output1);

//Taking More Real world examples

const users = [
  { firstName: "Chetan", lastName: "Rawat", age: 26 },
  { firstName: "Rahul", lastName: "rana", age: 75 },
  { firstName: "Stem", lastName: "Rama", age: 50 },
  { firstName: "Suneet", lastName: "Sharma", age: 26 },
];

// List of full Names

const outputs = users.map((x) => x.firstName + " " + x.lastName);

console.log(outputs);

//we need output like this {26: 1, }

const outputing = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(outputing);

// const outputings = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
// }, {});

//get the first name for  the person, whose age is less then 30, to do soo we will use fiter and map together for this.

const result = users.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(result);

// chetan();

// azaz(); //will throw an error

// var azaz = function () {
//   console.log("Function Expresssion");
// };

// function chetan() {
//   console.log("Chetan");
// }
