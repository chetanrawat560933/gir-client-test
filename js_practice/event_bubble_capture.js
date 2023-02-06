// document.querySelector('#grandparent').addEventListener('click', () => {
//   console.log('Grand Parent clicked');
// });

// document.querySelector('#parent').addEventListener('click', () => {
//   console.log('Parent clicked');
// });

// document.querySelector('#child').addEventListener('click', () => {
//   console.log('Child clicked');
// });

/*Above code output is --> Child clicked, Parent clicked, Grand Parent clicked */

// document.querySelector('#grandparent').addEventListener(
//   'click',
//   () => {
//     console.log('Grand Parent clicked');
//   },
//   false
// );

// document.querySelector('#parent').addEventListener(
//   'click',
//   () => {
//     console.log('Parent clicked');
//   },
//   false
// );

// document.querySelector('#child').addEventListener(
//   'click',
//   () => {
//     console.log('Child clicked');
//   },
//   false
// );

//Same output as above it will perform event bubbling

// document.querySelector('#grandparent').addEventListener(
//   'click',
//   () => {
//     console.log('Grand Parent clicked');
//   },
//   true
// );

// document.querySelector('#parent').addEventListener(
//   'click',
//   () => {
//     console.log('Parent clicked');
//   },
//   true
// );

// document.querySelector('#child').addEventListener(
//   'click',
//   () => {
//     console.log('Child clicked');
//   },
//   true
// );

// It will perform Event Capturing output --> if we click on child div,
//it will print ->Grand Parent clicked, Parent Clicked, Child clicked

//-------------------------------------------------------------------
//-----------------------------------------------------------------

// document.querySelector('#grandparent').addEventListener(
//   'click',
//   () => {
//     console.log('Grand Parent clicked');
//   },
//   false
// );

// document.querySelector('#parent').addEventListener(
//   'click',
//   (e) => {
//     console.log('Parent clicked');
//     e.stopPropagation();
//   },
//   false
// );

// document.querySelector('#child').addEventListener(
//   'click',
//   () => {
//     console.log('Child clicked');
//   },
//   false
// );

//Output -> Child Clicked, Parent clicked,since there is stoppropagation method, it will not print granparent one

/* ----------------------------------------------Event Bubbling ---------------------


When an event happens on the element , it first runs the handlers on it, then on its parent and all the way up
on other ancestors.


*/

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("GrandParent Clicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked");
  },
  false
);
