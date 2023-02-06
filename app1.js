// get_name();

// console.log(z);

// var z = 7;

// function get_name() {
//   console.log("Chetan Hoisting");
// }

// let name;

// console.log(name);
// //output - undefined.

// {
//   let a = 10;
//   let b = 20;
// }

// console.log(a); //error --> Reference error
// console.log(b);

// var b = 20;
// function a() {
//   c();

//   function c() {
//     console.log("inside function", b);
//     var b = 30;
//     console.log("inside function after modification", b);
//   }
// }

// a();

// console.log("In Global scope", b);

// var b = 20;

// function aa() {
//   c();

//   function c() {
//     console.log("inside function", b);
//     var b = 30;
//     console.log("inside function after modification", b);
//   }
// }

// aa();

// console.log("Outside function", b);

//console.log("------------------------");

// let language = 10;

// function a() {
//   handleChange();
//   function handleChange() {
//     console.log("Inside Function before modification-> ", language);
//     language = 20;
//     console.log("Inside Function after modification-> ", language);
//   }
// }

// a();

// console.log("Outside function-> ", language);

// let a = 10;

// console.log(a);

// console.log(window.a); //undefined

// var b = 10;

// {
//   var b = 20;
//   console.log(b); //20
// }
// console.log(b); //20

//Shadowing

// var c = 20;

// {
//   var c = 30;
//   console.log(c); //30
//   window.c = 40;
// }

// console.log(c); //40

// function x() {
//   var a = 7;

//   function y() {
//     console.log(a); //20
//   }

//   a = 20;

//   return y;
// }

// x()();

// x()();

//Data Encapsulation

// function y() {
//   let count = 1;

//   return function Count() {
//     count++;
//     console.log(count);
//   };
// }

// let count1 = y()(); //2

// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }

//   let a = 10;
//   return inner;
// }

// var close = outer("Hello");

// close();

//Set Timeout + Closure

//Now we need to print 1 after 1 sec,
// 2 after 2 sec like this

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }

//     close(i);
//   }

//   console.log("Namaste Javascript");
// }

// x();

// a();
// b();

//Function Statement

// function a() {
//   console.log("A called");
// }

// //Function Expression, function act likes a value.

//Anonymous Function

// function ()
// {

// }

//Named fucntion expression

// var b = function (param1, param2) {
//   console.log("B called");
// };

// b(1,2); // 1 and 2 are arguments ,  whereas param1 and param2 are parameters

// //But we can not call xyz() directly

// // xyz();

//parameters and arguments

//First class functions

// var b = function (param1) {
//   return function xyz() {};
// };

// console.log(b());

// setTimeout(function () {
//   console.log("timer");
// }, 1000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// function One() {
//   console.log("One");
// }

// function Two(Call_one) {
//   console.log("Two");
//   Call_one();
// }

// Two(One);

// function attachEventListner() {
//   let count = 0;

//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("Button Clicked", ++count);
//   });
// }

// attachEventListner()

//

// const radius = [1, 2, 3, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));

const users = [
  { firstName: "Chetan", lastName: "Rawat", age: 26 },
  { firstName: "Rahul", lastName: "rana", age: 75 },
  { firstName: "Stem", lastName: "Rama", age: 50 },
  { firstName: "Suneet", lastName: "Sharma", age: 26 },
];

const outputing = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(outputing);
