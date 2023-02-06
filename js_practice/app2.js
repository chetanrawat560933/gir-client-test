// const foo = {}; //foo is an object

const person = {
  name: 'foo',
  age: 21,
};

//Access object values

console.log(person.name);
console.log(person['age']);

//function

function addMe(a, b) {
  return a + b;
}

let sum = addMe(1, 2);
console.log(sum);

function addMeone(b) {
  const a = 2;
  return a + b;
}

let sum1 = addMeone(2);

console.log(sum1); // 4

//console.log(b);
//app2.js:31 Uncaught ReferenceError: b is not defined

//Scopes in javascript

var a = 1;

//global scope
function one() {
  console.log(a); //1
}

//local scope - parameter
function two(a) {
  console.log(a); //parameter value i.e 2
}

function three() {
  var a = 3;
  console.log(a); // 3
}

one();
two(2);
three();

// Construction Functions

function Person() {
  this.name = 'john';
  this.age = 21;
}

var john = new Person(); // The person function is used to create object john

console.log(john);

//this example

const persons = {
  name: 'foo',
  age: 21,
  getmyAge: function () {
    return this.age; //21
  },
};

console.log(persons.getmyAge);

//top level execution context

function go() {
  console.log(this);
}

go();

var myObjs = { foo: 20 };
var foo = 10;

function print() {
  console.log(this.foo);
}

print(); // this will log window.foo = 10

print.apply(myObjs);

/*The New Operator :-
1>Built-in objects 
2> user-defined objects
*/

var cars = new Array('Honda', 'Audi', 'BMW');

class Car {
  constructor(name) {
    this.name = name;
  }
}

var car = new Car('Honda');

console.log(car); // {name:Honda}

/*Constructer function example

1>Cars is a constructor function because it is invoked using new keyword.
2>Cars function has a field called name.
3>myCar object is created from the Car function using new keyword.
4>myCar object is created from the Car function using new keyword
When that is done:
It makes Car the prototype/constructor of myCar
It sets the name 􀁻eld to Honda
The value of myCar becomes {name:'Honda'}

 */

function Cars(name) {
  console.log(this); //Cars {}
  this.name = name;
}

var myCar = new Cars('Hyundai');

console.log(myCar); // {name:"Hyundai"}

// Example of creating an object with and without new operator

var Foo = function () {
  this.A = 1; // value of this is undefined
  console.log(this); // it will be a winow object as Foo is invoked within window object
};

var t = Foo();
console.log(t); // it will return undefined as function Foo is not returning anything.

var Foo1 = function () {
  this.A = 1;
};

var m = new Foo1();

console.log(m); // m is {A : 1}, type of m is

//Diff btw new operator and Object.create

function Bus() {
  console.log(this); // this points to myCar
  this.name = 'Thiago';
}

var myBus = new Bus();

console.log(myBus);
console.log(myBus.name); // name:"Honda"
console.log(myBus.name); //Thiago
console.log(myBus instanceof Bus); //true
console.log(myBus.constructor); //function Bus() {}
console.log(myBus.construtor === Bus); //true

console.log(typeof myBus); //object

const Caring = {
  name: 'Honda',
};
var myCar = Object.create(Caring);
console.log(myCar); // Object {}
console.log(myCar.name); // Honda
//console.log(myCar instanceof Caring); // ERROR
console.log(myCar.constructor); // Anonymous function object
console.log(myCar.constructor === Car); // false
console.log(typeof myCar); // object

/*What is prototype ?
1> It is a link to other object 
2> In javascript, objects are chained together by prototype chain

Joe --> Person --> Object ---> Null

3> Prototype property allows you to add properties and methods to any object dynamically */

function Animals(name) {
  this.name = name;
}

Animals.prototype.age = 10;

var Cat = new Animals('cat'); //The Animal is the prototype object or the constructor of the Cat
console.log(Cat);

console.log(Cat.name); // cat

console.log(Cat.age); //10

/*Prototypal Inheritance */

function Animal(name) {
  this.name = name;
}

Animal.prototype.move = function () {
  console.log('move');
};

function Cam(name) {
  Animal.call(this, name); //With call(), an object can use a method belonging to another object.
  // console.log(this);
}

Cam.prototype.meow = function () {
  console.log('meow');
};

//linking prototypes

Cam.prototype = Object.create(Animal.prototype);

var misty = new Cam('Majesty');

console.log(misty);
console.log(misty.constructor);
console.log(misty.name);
//console.log(misty.meow());
console.log(misty.move());

//Example of prototypal inheritance

function Building(address) {
  this.address = address;
}

Building.prototype.getAddress = function () {
  return this.address;
};

function Home(owner, address) {
  Building.call(this, address);
  this.owner = owner;
  console.log(this);
}

Home.prototype.getOwner = function () {
  return this.owner;
};

var myHome = new Home('Joe', '1 Baker Street');

console.log(myHome);

console.log(myHome.owner);
console.log(myHome.address);

console.log(myHome.getOwner());
//console.log(myHome.getAddress()); // it will give an error prototype of Home is not linked to prototype of Building

//linked the prototype
Home.prototype = Object.create(Building.prototype);
//console.log(myHome.getAddress());

/*How does prototypal inheritance/prototype chain work in above example?
JavaScript checks if myHome has an getAddress method - it doesn't
JavaScript then checks if Home.prototype has an getAddress method - it doesn't
JavaScript then checks if Building.prototype has an getAddress method - it does
So, JavaScript then calls the getAddress on the Building function*/

//Hoisting
console.log(bbb); // it will print undefined , not error
var bbb = 1;

/*The variable declarations are silently moved to the very top of the current scope
Functions are hoisted 􀁻rst, and then variables.
NOTE 1: Variables and constants declared with let or const are not hoisted!
NOTE 2: Function declarations are hoisted - but function expressions are not!*/

finish(); //No error

function finish() {
  console.log(1);
}

//finish1(); // we will get an error, as hositing doesn't work in function expression

var finish1 = function finished() {
  console.log(2);
};

/*------------------------------------Closures-------------------------------------

Closure is when a function is able to remember and access its lexical scope even when that function 
is executing outside its lexical scope 

Some imp points to be noted

Whenever you see a function keyword within another function, the inner function has access to
variables in the outer function.
That is a Closure */

//Basic example of closure
var x = 42;

function finals() {
  return a;
}

/* 1>Closures are just variables that come from a higner scope
2> The function defined in the closure remembers the envt in which it was created.
3>Closure happens when an inner function is defined in outer function and is made accessible to
called later */

function sayHello() {
  var hello = 'Hello World!';

  var log = function () {
    console.log(hello);
  };
  return log;
}

var myClosure = sayHello();
myClosure();

/* Explanation :-1> In the below example we have a function sayHello
2>It declares a local variable called hello
3>It also declares a function variable called log()
4>And finally it returns the log() function 
5> So myClosure variable is now pointing to the log() function 
6> Meaning myClosure() function is actually invokling the log() function from the 
sayHello() function .
7>log() function accurately logs the value of hello variable which was originally 
decalred in the parent function sayHello()
8> It means the log() function has accurately remembered the value of the hello variable,
This phenomenon is called closure
9>The value of hello variable is successfully locked into the closure of the log() function */

//----------------------------------IIFE---------------------------
//It is referred as Immediately Invoked Function Expressions

/*
(function foo() {
  
  //your code

})()

1>It is function expression       
2>It is more of a self executing function -an IIFE
3>It wraps the inside members to the scope 
4>Ir prevents from polluting the global space
5>It is useful in closures             
*/

var sums = (function () {
  var foo = 20;
  function bar() {
    foo = foo + 10;
    console.log(foo);
  }
  return bar;
})();

sums(); //30
sums(); //40
sums(); //50

console.log(sums); /* ƒ bar() {
// foo = foo + 10;
// console.log(foo);
*/

/*-------------------call,apply and bind function--------
bind
It returns a function 
This returned function can later be called with a certain context set for calling the original function
The returned function needs to be invoked seprately 


*/

var p1 = {
  naming: 'Cheatn',
  hello: function (message) {
    console.log(this.naming + ' says hello ' + message);
  },
};

var p2 = {
  naming: 'Ninja Acadmey',
};

var skyHello = p1.hello.bind(p2);
skyHello('world');

var skyHello = p1.hello('world');

console.log(skyHello); // undefined

/*-----------call() ------------------------
1> call() attaches this to function and invokes the function immediately
2> The owner object is sent as an argument
3> With call(), an object can use a method belonging to another object 
*/

var p3 = {
  hello: function (message) {
    console.log(this.name + ' says hello ' + message);
  },
};

var natGeo = {
  name: 'Net Ninja',
};

p3.hello.call(natGeo, 'wine'); // Net Ninja says hello wine

/*-----------------------apply() --------------

1> apply also attaches this to a function and invokes the function immediately.
2>apply is similar to call() except it takes an array of arguments instead of the 
comma-seprated list 

*/

var person5 = {
  hello: function (message) {
    console.log(this.name + ' says hello ' + message);
  },
};
var ngNinja = {
  name: 'NgNinja Academy',
};
person5.hello.apply(ngNinja, ['world']); // output: "NgNinja Academy says hello world

/*------------------------------Asynchronous Javascript --------------------*/

/* Call Back function 
These are the functions that are executed "later"
Later can be any action that you'd want to be completed before calling the the callback function
Callback functions are passed as arguments to the outer function */

function getName() {
  return 'Sleepless Chetan';
}

function greet(callbackFn) {
  // call back function is executed here
  const name = callbackFn();
  return 'Hello ' + name;
}

var end = greet(getName);

console.log(end);

/*--------------ASYNCHRONOUS PROGRAMMING ------------------

1> This is the type of programming where actions does not take place in a predictable manner 
2> Example: Network calls
3> When you make an HTTP call you cannot predict when the call will return 
4> Therfore your program needs to consider this asynchronism to out the correct results.

*/

function printUser(name) {
  console.log(name);
}

function fetchAndPrintUser(printCallBackFunction) {
  //stimulate fake network call
  setTimeout(() => {
    const fakeUserName = 'Sleepless chetan';

    printCallBackFunction(fakeUserName);
  }, 500);
}

//Execute the function to fetch user and print the user's name

fetchAndPrintUser(printUser);

/*-----------------PROMISES ----------------------
Promises are basically another way to deal with asynchronous programming
These simpli􀁻es your async code greatly!
The example we saw earlier was contrived and simple - so you might not notice much di􀁸erence
BUT! in the real world applications promises simpli􀁻es the code to a great extent.

What is Promise ?
--Promise is literally a promise made by some function.
--That it will eventually return the result and fulfill that promise.
--Promise is a proxy for a value that will eventually become available

*/

/*const newPromise = new Promise();

function fetchAndPrintUser1() {
  //create new promise
  return new Promise((resolve, reject) => {
    //simulate fake network call
    setTimeout(() => {
      //simulate error
      //when  error occurs we reject the promise
      if (SomeError) {
        reject(alert('Error occured'));
      }
      //  const fakeUserName = 'Sleepless Yogi';
      //Resolve the user name
      resolve(fakeUserName);
    }, 500);
  });
}

// Execute function that fetch user and then prints
fetchAndPrintUser1()
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  }); */

/*---------------Promise.all--------------------

  Let's see how to handle if you want to fetch via multiple APIs and then perform some operation on
the entire dataset
This naive way would be to declare multiple promises and then perform operations when all
promises are resolved
Like below
We create two di􀁸erent promises
One for user data
Another for order data */

/* you can see below how messy the code is 
const userPromise = new Promise();
const orderPromise = new Promise();

//Wait for user data
userPromise.then((userData) => {
  //Wait for order data
  orderPromise.then((orderData) => {
    //after you get user and order data both
    //then perform some operation on both dataset
    console.log(userData, orderData);
  });
}); */

/*-----The above example */

/* --------------async AND await-----------------*/

// async function fetchAndPrintUser() {
//   const name = await fetchUserData();

//   console.log(name);
// }

/*------------Javascript classes -------------

Classes were introduced in ES6 standard
Simple Person class in JavaScript
You can de􀁻ne constructor inside the class where you can instantiate the class members
Constructor method is called each time the class object is initialized

*/

class Persons {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

var john = new Persons('John');

console.log(john); // Persons {name: "John"}
console.log(typeof john); //object

console.log(john.getName()); //John

/*Using classes ES6 style */

class Personl {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Personl {
  constructor(name) {
    super(name);
    this.gender = 'Male';
  }
}

var chetan = new Man('noobiemaniac');
console.log(chetan); //Man {name: "noobiemaniac", gender: "Male"}

/*Arrow Functions 

//syntax

(parameters) => { statements }

*/

//example
var double = (number) => number * 2;

//equivalent traditional function

var doubles = function (numbers) {
  return number * 2;
};

// example
var suming = (a, b) => {
  return a + b;
};
// equivalent traditional function
var suming = function (a, b) {
  return a + b;
};

/*--------------------------------Lexical this---------------------------------

1> It means forcing this variable to always point to the object where it is physically located within
2>This phenomenon is called Lexical scoping
3>Arrow functions let's you achieve a lexical this via lexical scoping
4>Unlike a regular function, an arrow function does not bind this, it preserves the original context
5>It means that it uses this from the code that contains the Arrow Function



/*Example on above */

var nigeria = {
  name: 'John',
  printName: function () {
    console.log(this.name); //John

    var getName = function () {
      return this.name; //error
    };

    var getNameArrowFunction = () => {
      return this.name;
    };
    // console.log(getName());
    console.log(getNameArrowFunction()); //No error
  },
};

nigeria.printName();

//Destructing Operator

let [xa, yb] = [1, 2];

console.log(xa);
console.log(yb);

let { maning, caring } = {
  caring: 1,
  maning: 2,
};

console.log(caring);

/*Rest and Spread Operator                     

Rest Operator := it allows us to more easily handle a variable number of function parameters
Earlier we had to use arguments variables to achieve this.

*/

function logging() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
logging('a');

logging(2, 3, 4);

/*Above example using rest operator 
1>It will assign all the remaining parameters to a rest -variable after those that were already assigned.
2>in below example numbersToLog is the rest variable in the example below
3>Rest operator puts all the remaining arguments in an array and assigns it to the rest - variable */

/*Rest operator turns comma-seprated value to an array */

function log(a, ...numbersToLog) {
  console.log(a);
  console.log(numbersToLog); //[8,9]
}

log(7, 8, 9);

/*----------------Spread Operator--------------------
It looks like has the same as the Rest parameter 
But it has a diff use case
In fact, it perform almost the opposite function to rest operator 
Spread operator turns an array to comma-seprated values

*/

var array1 = [2, 3];
var array2 = [1, ...array1, 4, 5];

console.log(array2);

// array2 = [1, 2, 3, 4, 5];

const arr1 = ['coffee', 'tea', 'milk'];
const arr2 = ['juice', 'smoothie'];

//Without spread

var beverages = arr1.concat(arr2);
console.log(beverages);

//With Spread
var beverages1 = [...arr1, ...arr2];

console.log(beverages1);

//Make copy of array

var arrays2 = ['coffee', 'tea', 'milk'];

var arrays3 = arrays2.slice();

console.log(arrays3);

//With Spread

const arr1Copy = [...arrays2];
console.log(arr1Copy);

//Remove duplicate enteries from array

const arr6 = ['coffee', 'tea', 'milk', 'coffee', 'milk'];

const arr1unique = [...new Set(arr1)];

console.log(arr1unique);





var x  =10;

function y() {
  var x = 5;
  console.log(x);
}


y();
