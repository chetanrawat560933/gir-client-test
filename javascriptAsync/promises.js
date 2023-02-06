// A promise is just an object, which gives us back either a result of an asynchronous operation or a failure of async operation
//Promise is just a callback function ,and it is passed with 2 arguments, resolve callback and reject callback
// const promise = new Promise();
// console.log(promise); --> it results in an error

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Got the user");
//     reject(new Error("User not logged In"));
//   });
// });

// console.log(promise);

// //executing promise

// promise
//   .then((user) => {
//     console.log("user");
//   })
//   .catch((err) => console.log(err.message));

//-------------------Now refactoring the whole code of callback.js in promise -----------------

console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Title of the video");
    }, 2000);
  });
}

// const user = loginUser("rawatchetan45@gmail.com", 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

loginUser("ed", "bumba")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

/*
Above we are getting the data, from the prmoises ...the flow is when we get the user information then only we get the user videos and4
then only we get the video detail....what if we need to access the data all together, then we can use the Promise.all 
*/

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting stuff from youtube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting stuff from facebook");
    resolve({ user: "Name" });
  }, 2000);
});

Promise.all([yt, fb]).then((result) => console.log(result));

//console.log("End");
