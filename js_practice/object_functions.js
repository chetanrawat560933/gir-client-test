//objects are non - primitive data type
const foo = {} // foo is an object


// const person = {
//     name: "foo",
//     age:21
// }

// //Access object value

// console.log(person.name);
// console.log(person.age);



//FUNCTIONS

function addMe(a,b) {
    return a + b;
}

//Invoke Function

let sum = addMe(1,2)

console.log(sum);

//Local variables

function addMe2(a)
{
    let b = 2;
    return a + b;
}

let sum1 = addMe2(5);
console.log(sum1);

// console.log(b);  // error b is not defined



//Function Expression

//we are assigning an anonymous function to a variable

var addMe3 = function(a,b) {
    return a + b;
}

var sums = addMe3(1,2)
console.log(sums);



//Scoping in javascript

/*
1> Local Scope : -  Available locally to a block of code
2> Global Scope : - Available globally everywhere  
*/

//javascript always had a function scope, but now for let and const we had block scope

//-----------------*Function parameters are locally scoped variables* ----------------
// variables declared inside the function are local to those function



var a = 1;

function one() {
    console.log(a);
}

//local scope -parameter

function two(a) {
    console.log(a) //parameter value
}

function three() {
    var a =3
    console.log(a);
}

// one(); //1

// two(2); //2

// three(); //3


// let b = 35


// if(1) {
//     let b = 19;
//     console.log(b);
// }

// console.log(b);



//Constructor Functions

// Function used to create new objects are known as constructor function
// Below function Person is a standard function, but the function is used to create a new object called john.




function Person() {

    //this  = {name: 'John', age: 21}

    this.name = "John";
    this.age =  21

    //return this
}

var j = new Person();


console.log(j.name);


////////////////////////////////--------------------THIS KEYWORD----------------------------------///////////////////////////

/*This in global scope -- this refer to the global object. The value of the object depends on the environmnt in 
which you are running your javascript code. If you run your code in a browser then the global object is called window object.

*/

console.log(this === window) //true



//----------------------------------------------this INSIDE FUNCTION-----------------------------------------------

//Four ways to call a function -----1. Making a standalone call

//Calling a function like function_name (); is a standalone call. value for this inside function is the window object.

function foo1(){
    console.log(this === window) //true
}



foo1();


//////////////////////------------2. this inside Functions 

/*------------------------------------calling the function in the context of an object.---object.function_name();

when a function is called as a method on an object, then the value of this is set to the object which was used to call the method

*/

const person = {
 name: "Chetan",
 sm:"Twitter",
 foo: function(){
     return this;
 }
}

console.log(person.foo() === person); //true

let aa = person.foo()

console.log(aa);    //{name: 'Chetan', sm: 'Twitter', foo: ƒ}



//-------------------------------Calling a function in  constructor mode

/*
----when we call a function using the new keyword, it is termed as calling the function in constructor mode.
---when we call a function in constructor mode , then the value of this is the new object being constructed
*/

function Person1(name,age) {

    //this  = {name: 'John', age: 21}

    this.name = name;
    this.age = age;
    console.log(this);
    return this;
    
}

let xyz = new Person1("chetan",21);

console.log(xyz); //Person1 {name: 'chetan', age: 21}



//------------------------------------------ calling using function_name.call() -----------

/*
------------The fourth way to call a function is using the call property of the function.
 In JavaScript, every function has a property named call which can be used to call the function. 
 I know it sounds weird but this is what it is.


 Now, You have seen how to call a function using the call property. Are you thinking, 
 who the hell will call a function this way if we can call directly?

Here is one reason. When we invoke a function using the property call, we can 
actually pass an object to the call() and inside that function, this will point 
to the object which was passed as the argument.

*/




function vvv(){
    console.log(this.name);
}

const personing = {
    name: "Chetan",
    sm: "Rawat"
}

vvv.call(personing);





/////--------------------------------------------3 this inside arrow function


/*

The arrow functions don't have their own value of this. The value of this inside an arrow 
function is equivalent to the value of this in its outer environment.

Putting differently, the arrow function borrows the value of this from its parent's scope.

*/

const obj1 = {

name: 'Chetan',
sm:'Twitter',
bio: () => this === window

}

console.log(obj1.bio()); //true

//bio is an arrow function, it has taken this from the parent context which is actually the global context
//hence, this in bio refers to the window object




const persons = {
    myname:"chetan",
    sm:"Twitter",
    bio: function(){
            setTimeout(() => {
            console.log(this.myname);
        }, 100)
    },
  }
  
  persons.bio();


/*

We are using this not inside the bio function directly but inside the arrow function of setTimeout.
 The this.myname inside arrow function returns "Faheem" because the arrow function has taken this value from the outer scope,
  that is from the scope of the bio.

*/


var objcs = {name:"Niladri"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};

//creates a bound function that has same body and parameters 
var bound = greeting.bind(objcs);  //it will return a function


console.dir(bound);

console.log(bound("N",1,2));



//few more example on this -------------------//

var myObj = {foos: 20};

var foos = 10;

function print() 
{
    console.log(this.foos);
}


print();


print.apply(myObj);





function Car(name) {
    console.log(this);
    this.name = name;
    console.log(this);
}

var myCar = new Car('Honda');

console.log(myCar);


var Foo = function() {
    console.log(this);
    this.A = 1;
    console.log(this);
};

var m = new Foo(); 
console.log(m);



//diff btw the new operator and Object.create Operator

function Cars() {
    console.log(this) // this points to myCar
    this.name = "Honda";
   }
   
var myCar = new Cars();

console.log(myCar.constructor === Cars) // true


/* Object.create in JavaScript
You can also use Object.create to create a new object
But, it does not execute the constructor function
Object.create is used to create an object from another object */

const Caring = 
{
    name: "Honda"

}
   
var myCar = Object.create(Caring);
   
console.log(myCar.constructor === Car) // false




///---------------------------------Prototypal Inheritance from javabrains--------------------------------------------------------


//For emp1 and emp2 we have to do so much manually work, what we can do is create a function for emp3, things will become easy


var emp1 = {};
emp1.firstName = "Chetan";
emp1.lastName = "Rawat";
emp1.gender = "M";
emp1.designation = "Regional Manager";

var emp2 = {};
    emp2.firstName = "Sahil";
    emp2.lastName = "Mangal";
    emp2.gender = "F";
    emp2.designation = "Assistan Manager";
    console.log(emp2);


    //using function how it became super easy

function createEmplopyeeObject(firstName, lastName, gender, designation) 
{
    var newObject = {}; //line 1 
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject;   //line 2
}


var emp3 = createEmplopyeeObject("Jim","hal", "M","Sales Represent");


console.log(emp3);  

console.log("..................");


function createnewemployeeobject(f,l,g,d) {

    // var this = {}

   this.firstName = f;
   this.lastName = l;
   this.gender = g;
   this.department = d;

   //return this;


}


var emp4 = new createnewemployeeobject("chetan","rawat","S","representative");

console.log(emp4);

console.log(emp4.firstName);
console.log(emp4.department);





// var x = new function_name() ---we are telling javascript that i am making this function call because i want to beahave like a 
//constructor , and i am using it to create an object. with new keyword it tells javascript that this function actually results in a
//new object being created.

/*so javascript gets it that we are trying to create an object over here and knows that comment line 1 and comment line 2 are mandatory
so javascript takes care of them internally we dont have to write this line, just define/populate the object , javascript will create the object
in the beginning and at the end will return it as well.

The javascript does is the interpreter makes this new object created over here available to you using this keyword.


*/











//---------------------------------------Difference between re3gular functions and constructors-------------------------

// var bicycle = {

//     "cadence": 50,
//     "speed": 20,
//     "gear": 4
// };

//above thing we can achieve by   

//Regular Function

function createBicycle(cadence, speed, gear) {

var newBicycle = {};
newBicycle.cadence = cadence;
newBicycle.speed = speed;
newBicycle.gear = gear;
return newBicycle;

}

var bicycle1 = createBicycle(50, 20, 4);

// var bicycle1 = new createBicycle(50, 20, 4); ---regular function would also work with new keyword.

//but calling the constructor function without the new keyoword doesn't work. No new object 
//is created and the return value is undefined.



console.log(bicycle1);



function Bicycle(cadence, speed, gear) 
{
  //var this = {};
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  //return this
}

var bicycle2 = new Bicycle(21,34,56);

console.log(bicycle2);




//Function Execution steps



function fooing() {
    console.log("Hello")
    console.log(this);
}

fooing(); //stand alone call --method 1, here the this refers to global object


var objecting = {};

objecting.fool = function() {
    console.log("Hello");
    console.log(this);
}

objecting.fool(); // when function is an object property --method 2 , here this refer to the object itself




function fooings() {
    //var this = {}
    console.log("Hello")
    console.log(this);
    //return this
}

var xxxx = new fooings();// using new keyword --method 3, calling standalone function using new keyword  
//refers to the newley created object


console.log(xxxx);


 //there are 2 default arguments to every function call: arguments and this.














 function Bicycle1(cadence, speed, gear, tirePressure) 
{
  //var this = {};
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;
  this.inflateTires = function() {
          this.tirePressure +=3;
       console.log(this); // Bicycle1 {cadence: 21, speed: 34, gear: 56, tirePressure: 38, inflateTires: ƒ}
  }

   console.log(this); // Bicycle1 {cadence: 21, speed: 34, gear: 56, tirePressure: 35, inflateTires: ƒ}
  //return this
}

var bicycle11 = new Bicycle1(21,34,56,35);

bicycle11.inflateTires(); 

console.log(bicycle11);

function Mechanic(name) {
    this.name = name;
}

var mike = new Mechanic("Mike");

 mike.inflateTires = bicycle1.inflateTires;

 console.log("vvvvvvvvvvvvvvvvvvvvvvvvv");
 console.log(bicycle1.inflateTires);


 //javascript objects doesnt own methods. They just have properties , and any property can be a function.

 //class concept came in ES6

 //functions are objects in javascript


 function fff() {}

 function baring() {}


/*whenever javascript object processess function , it creates two objects ---first object is the function itself
The second object created is the prototype object / or the object for prototype.


 In this case we have 2 object for fff() function, one is fff itself and other is the prototype
object. how do we access that prototype object ?

js creates a property at backend on these function objects, that point to the prototype objects.

*/

fff.prototype

console.log("--------------------------------------");

console.log(fff.prototype);



//now crating obbject using new keyword

var myObjects = new fff();

console.log(myObjects);

// the property __proto__ js engine creates for every object using new keyword.



// so for function we access prototype object using function_name.prototype keyword.
//Also for Object we access Prototype object using __proto__ keyword.




function foot () {}

var newfoot = new foot();

console.log(newfoot);

//we are creating test property on prototypw object of foot
foot.prototype.test = "This is the prototype object of foot"

console.log(newfoot.__proto__.test);

foot.prototype === newfoot.__proto__ //true


// so first hello function would be checked in newfoot and then in the prototype object of newfoot ie newfoot.__proto__

newfoot.hello

//if we add property to __proto__ 

newfoot.__proto__.hello = "This value is from proto type";

console.log(newfoot.hello);



//Employee being a constructor function
function Employee(name)
{
    this.name = name; 
}

var employee1 = new Employee("Chetan");

var employee2 = new Employee("Rawat");





Employee.prototype.playPranks = function() {console.log ("Prank Played")}; 


//console.log(Employee.prototype.playPranks());


console.log(employee1.playPranks());    



console.log(employee1);


//The Object Function object

//There is a global Object available to you --how to access just write console.log(Object);

console.log(Object);

console.log(Object());

//we can also create the object using new with Object keyword

var objectss = {};
console.log(objectss); 

var simplest = new Object();

console.log(simplest);

console.log("hjbhjbhbhbhjvbhjvbhjvghvg");

console.log(objectss === simplest);

console.log(Object.prototype);

console.log(simplest.__proto__);

console.log(objectss.__proto__ === simplest.__proto__);




//The Prototype Object 




function Employees() {}

var emps = new Employees();

emps.__proto__.parentProp = "Parent of Employee";

console.log(emps.parentProp); 

//imp
console.log(emps.__proto__.__proto === Object.prototype);

Object.prototype.grandparentProp = "Grand Parent";



function tmps () {};

var tmpss = new tmps();


//because we have applied grandparentProp to Object prototype , it will be accessible to all the objects now.

console.log(tmpss.grandparentProp);  //Grand Parent






//prototypal Inheritance


function EmployeeInheritance(name) 
{
    this.name = name;
}

EmployeeInheritance.prototype.getName = function() {return this.name;}


var empnew = new EmployeeInheritance("Chetan");

console.log(empnew.getName());


function Manager(name, dept) {this.name = name; this.dept = dept; }

Manager.prototype.getDept = function() {return this.dept;}

var mgrs = new Manager("Michel", "Sales"); 

console.log(mgrs.getDept());

//console.log(mgrs.getName()) --it will result an error as mgrs doesnt have the access to getName() 

//how do we access the getName()

mgrs.__proto__proto__ = EmployeeInheritance.prototype;















