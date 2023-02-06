// document.querySelector("#grandparent")
// .addEventListener('click', () => {
//  console.log("Grandparent Clicked")
// }, false);

// document.querySelector("#parent")
// .addEventListener('click', () => {
//  console.log("Parent Clicked")
// }, false);

// document.querySelector("#child")
// .addEventListener('click', () => {
//  console.log("Child Clicked")
// }, false);

//If i click on #child id div....
/* Child Clicked
 Parent Clicked
Grandparent Clicked
if false it works in bubling mode....by default also it is false...... */

// document.querySelector("#grandparent")
// .addEventListener('click', () => {
//  console.log("Grandparent Clicked")
// }, true);

// document.querySelector("#parent")
// .addEventListener('click', () => {
//  console.log("Parent Clicked")
// }, true);

// document.querySelector("#child")
// .addEventListener('click', () => {
//  console.log("Child Clicked")
// }, true);


//now if you click on child div the output would be

/* Grandparent Clicked
   Parent Clicked
   Child Clicked    */



//as per w3c first event propogation occur and then event bubbling. 

// document.querySelector("#grandparent")
// .addEventListener('click', () => {
//  console.log("Grandparent Clicked")
// }, true);

// document.querySelector("#parent")
// .addEventListener('click', () => {
//  console.log("Parent Clicked")
// }, false);

// document.querySelector("#child")
// .addEventListener('click', () => {
//  console.log("Child Clicked")
// }, true);


//How to stop propogation ? -- we use stopPropogation(); method of event object


document.querySelector("#grandparent")
.addEventListener('click', () => {
 console.log("Grandparent Clicked")
}, false);

document.querySelector("#parent")
.addEventListener('click', (e) => {
 console.log("Parent Clicked")
 e.stopPropagation();
}, false);

document.querySelector("#child")
.addEventListener('click', () => {
 console.log("Child Clicked")
}, false);