localStorage.setItem("hello","world")

console.log(localStorage.getItem('hello'));

//localStorage.clear()

//localstorage only accept string, but they have to make accept object.


const user = {name: "chetan"}

localStorage.setItem("user-copy", JSON.stringify(user)); // converted the object to string.


//now get the output of user-copy, it would be string,

console.log(localStorage.getItem("user-copy"));



//converting string into object again

console.log(JSON.parse(localStorage.getItem("user-copy")));

