// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//                 console.log("got the user");
//                 resolve({user: "ed"});
//     }, 2000);
// })

// promise.then(user => {
//     console.log(user);
// })


//if we get an error from an API for example

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
                console.log("got the user");
                reject(new Error("User not logged In"));
    }, 2000);
})

promise
.then(user => {
    console.log(user);
})
.catch(err => console.log(err));