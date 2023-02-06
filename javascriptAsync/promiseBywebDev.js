console.log("Start");

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// //Anything in then, is going to run for resolve

// p.then((message) => {
//   console.log("This is in Then", +message);
// }).catch((message) => { // it will be called in case of reject
//   console.log("This is in the catch" + message);
// });

// const userLeft = false;
// const userWatchingCatmeme = false;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatmeme) {
//     errorCallback({
//       name: "user watching cat meme",
//       message: "webdev simplified < Cat",
//     });
//   } else {
//     callback("Thumbs Up and subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " ", error.message);
//   }
// );

///Doing it in Promise

const userLeft = false;
const userWatchingCatmeme = false;

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatmeme) {
      reject({
        name: "user watching cat meme",
        message: "webdev simplified < Cat",
      });
    } else {
      resolve("Thumbs Up and subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

console.log("End");

///-------------------------Promise.All -----------------------------------

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 recorded");
});

//want to get result of all three together, we can use Promise.all

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messages) => {
//     console.log(messages);
//   }
// );

//Now if i want to display the first video for which download is completed  use Promise.race instead of Promise.all

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
