// let count = 0;
// const getData = () => {
//   //calls an API and gets Data
//   console.log("Fetching Data..", count++);
// };

// const debounce = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     console.log(this);
//     let args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       getData.apply(context, args);
//     }, delay);
//   };
// };

// const betterFunction = debounce(getData, 300);

let count = 0;

const getData = () => {
  //making an API call
  console.log("Fetching Data", count++);
};

let finalFunction = betterFunction(getData, 300);

const betterFunction = function (fn, delay) {
  let timer;

  clearTimeout(timer);
  return function () {
    let context = this;
    let args = arguments;
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, delay);
  };
};

//The function will trigger only if there is a pause of 300 ms btw 2 events, so we need to clear the timer as well
// if some one trigger the event again before the expiry...we use clearTimeout for that.
