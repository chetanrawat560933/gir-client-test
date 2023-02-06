// const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!)';

// const body = document.body;

// // const listItemElements = document.querySelectorAll('li');
// const listItemElements = document.getElementsByTagName('li');

// for (const listItemEl of listItemElements) {
//   console.dir(listItemEl);
// }

console.log(document.getElementById('main-title'));

console.log(document.querySelector('.list-item')); //it returns first matching item.

console.log(document.querySelectorAll('.list-item')); //returns a node list

console.log(document.querySelector('ul li:first-of-type'));


const h1 = document.querySelector('h1');

h1.textContent = "Some New Text";

console.log(h1);


h1.style.color = "red";

h1.style.background = "green";


/// Selecting Multiple Elements 

const listItemElements = document.querySelectorAll('li');

for (const listItemEl of listItemElements)
{
  console.dir(listItemEl);
}


//selecting second list item

const ul = document.querySelector('ul');

console.log(ul.children);

console.log(ul.children[1]) // to select second list item

console.log(ul.childNodes); // it contain all the childrens including text do check the output

// by default browser ignore the white space.


//ul.lastChild or ul.lastElementChild is one of the same thing same for First Element Child
