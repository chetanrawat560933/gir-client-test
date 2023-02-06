//fetch is promise based

//fetch return as repsonse

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "User 1" }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));

//for GET request , we dont need to pass second parameter fetch ().
