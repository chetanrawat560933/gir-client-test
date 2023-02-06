//Async CODE

// console.log("Start");

// function otherFunction() {
//   console.log("We are in function");
// }

// otherFunction();
// console.log("End");

// console.log("Start");

// //setTimeout(function, milliseconds)
// setTimeout(() => {
//   console.log("We are in the Timeout");
// }, 2000);

// console.log("End");

//login user example with setTimeout

// console.log("Start");

// function loginUser(email, password) {
//   setTimeout(() => {
//     return { userEmail: email };
//   }, 1500);
// }

// const user = loginUser("rawatchetan45@gmail.com", 123456);

// //Here the user will be undefined as we are doing console.log which is stored in call stack, so when it will
// //and in user we are getting value from loginUser function, which is using setTimeout, so till the time we reach
// //console.log(user) we are not getting the values from setTimeout..that is why we are getting undefined value.
// console.log(user);

// console.log("End");

//solving it with callback

//below x is a callback function
// function y(callback) {
//   console.log("y called");
//   callback();
// }

// y(function x() {
//   console.log("x called");
// });

//x function gets dependent on y function, we can execute x whenever we want

// console.log("Start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     callback({ userEmail: email });
//   }, 1500);
// }

// const user = loginUser("rawatchetan45@gmail.com", 123456, (user) => {
//   console.log(user.userEmail);
// });

//console.log("End");

console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 1500);
}

//Now suppose we need to get the video details as well for the user
//we will create a function

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}

//for video title we will add new headline

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("Title of the video");
  }, 2000);
}

const user = loginUser("rawatchetan45@gmail.com", 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("End");
