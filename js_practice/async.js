// //sync code example

// function otherFunction() 
// {
//   console.log("We are in other function")
// }

// console.log('Start');

// otherFunction();

// console.log('End')




//--------------------------Async code example 

//first one is setTimeout

// console.log("Start");

// setTimeout(() => {
//     console.log("We are in the timeout")
// }, 2000);


// const items = [1,2,3,4,5];

// items.forEach((item) => {
//  console.log(item); //calllback functions not necessarily asynchronous , they can be synchronous. 
// })



// console.log("End");

//output --> start, end , we are in the timeout


// console.log("Start");

// function loginUser(email,password) {

//     setTimeout(() => {
//         console.log("Now we have the data");
//         return { email: password };
//     }, 1500);
// }

// const user = loginUser("xyz@gmail.com", 123456);

// console.log(user);

// console.log("Finish");


//for above the output would be

//Start
//undefined ---since we are getting the data late, that is the result we are  getting undefined in return of id and password.
//Finish
//Now we have the data


console.log("Start");

// function loginUser( email, password, callback) {

//     setTimeout(() => {
//         console.log("Now we have the data");
//         callback({email: email });
//     }, 1500);
// }


// function getUserVideos(email, callback) {
//     setTimeout(() => {
//     callback (["video1", "video2", "video3"]);
//     }, 1000)
// }

// function videoDetails(video, callback) {
//     setTimeout(() => {
//        callback('Title of the video');
//     }, 2000)
// }


// const user = loginUser("xyz@gmail.com", 123456, user => {
//     console.log(user);
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title);
//         })
//     })
// });



//the above code is an example of callback hell.



function loginUser( email, password) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({userEmail: email });
        }, 1500);
    })
    
}


function getUserVideos(email) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve(["video1", "video2", "video3"]);
           }, 1000)
    })
   
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Title of the video');
         }, 2000)
    })
    
}


// const user = loginUser("xyz@gmail.com", 123456, user => {
//     console.log(user);
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title);
//         })
//     })
// });


loginUser("ed", "bumba")
.then(user => getUserVideos(user.email))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail));



//If we want to make sure that we need to attain bit synchronity 

function displayUser()
{
    const loggedUser = await loginUser('ed',1385);
    const videos = await getUserVideos(loginUser.email);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}

displayUser();



// console.log(user);

console.log("Finish");



///-----promise.all

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("Getting stuff from youtube");
        resolve({ videos: [1,2,3,4,5] });
    }, 2000);
});


const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("Getting stuff from facebook");
        resolve({ user: "Name"});
    }, 5000)
});




Promise.all([yt, fb]).then(result =>  console.log(result));





