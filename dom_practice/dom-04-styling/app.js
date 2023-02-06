// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;

// console.log(firstLi);

// const section = document.querySelector('section');
// const button = document.querySelector('button');

// // section.style.backgroundColor = 'blue';
// section.className = 'red-bg';

// button.addEventListener('click', () => {
//   // if (section.className === 'red-bg visible') {
//   //   section.className = 'red-bg invisible';
//   // } else {
//   //   section.className = 'red-bg visible';
//   // }

//   // section.classList.toggle('visible');
//   section.classList.toggle('invisible');
// });

//removing red background from the section tag, or you can say editing

const section = document.querySelector('section');

// section.className =  ''; //classname updated fore the

// section.className = 'red-bg';

const button = document.querySelector('button');

button.addEventListener('click', () => {
   if (section.className === 'red-bg visible') {
    section.className = 'red-bg invisible';
   } else {
    section.className = 'red-bg visible';
  }});
  

  //do check about dom classList

 
  //section.innerHTML = '<h2> A New Title</h2>'


  // const div = document.querySelector('div');

  // div.insertAdjacentHTML('beforeend', '<p>Something Went Wrong  </p>')

  //but we might not be having the direct access for the HTML element we addeed using insertAdjacentHTML 

  const list = document.querySelector('ul');

  const newLi = document.createElement('li');

  list.appendChild(newLi);

  newLi.textContent = 'Item 4';

  //list.append('Some Text Node'); //adding text node 

  


//list.lastElementChild.before(newLi);
//list.lastElementChild.after(newLi);

//list.FirstElementChild.replaceWith(newLi);

//removing element

//list.remove()

//list.parentElement.removeChild(list);