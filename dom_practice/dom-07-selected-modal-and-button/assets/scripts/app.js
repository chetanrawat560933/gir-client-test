const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button'); //button inside header 
// const startAddMovieButton = document.querySelector('header').lastElementChild;


const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const confirmedAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');

//const userInputs = addMovieModal.getElementsByTagName('input');

const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {

    if (movies.length === 0) { 

            entryTextSection.style.display = 'block';

    } else {
        entryTextSection.style.display = 'none';
    }
}

const deleteMovie = (movieId) => {
    const movieIndex = 0;
          
    for (const movie of movies)
    {
        if (movie.id === movieId)
        {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list'); 
    listRoot.children[movieIndex].remove(); 
}

const deleteMovieHandler = movieId => {
  const deleteMovieModal = document.getElementById('delete-modal');
  deleteMovieModal.classList.add('visible');
   // deleteMovie(movieId);

};

const renderNewMovieElement = (id,title, imageUrl, rating) => {

    const newMovieElement =  document.createElement('li'); 
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML =   `
             <div class="movie-element__image">
             <img src="${imageUrl}" alt="${title}">
             </div>
             
             <div class="movie-element__info">
             <h2>${title} </h2>
             <p>${rating}/5 stars </p>
             </div> `
    ;

    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id) );

    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
     
};




const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdrop();
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const addMovieHandler = () => {
   const titleValue = userInputs[0].value;
   const imageURLValue = userInputs[1].value;
   const ratingValue = userInputs[2].value;

   if (
       titleValue.trim() === '' ||
       imageURLValue.trim() === '' ||
       ratingValue.trim() === '' ||
       +ratingValue < 1 || 
       +ratingValue > 5
   ) 

   {
       alert('Please Enter valid values ');
       return;
   } 

   const newMovie = {
       id:Math.random().toString(),  
       title:titleValue,
       image: imageURLValue,
       rating: ratingValue
   }

   movies.push(newMovie);
   console.log(movies);
   closeMovieModal();
   clearMovieInput();
   renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
   updateUI();

};

const clearMovieInput = () => {
    for (const userInput of userInputs) 
    {
        userInput.value = '';
    }
}


const backdropHandler = () => {
     closeMovieModal();
    // clearMovieInput();
}


const cancelAddMovie = () => {
  //  toggleMovieModal();
  closeMovieModal();``
    clearMovieInput();
};


startAddMovieButton.addEventListener('click', showMovieModal );

backdrop.addEventListener('click', backdropHandler);

cancelAddMovieButton.addEventListener('click', cancelAddMovie );

confirmedAddMovieButton.addEventListener('click', addMovieHandler )




