const expensive = () => {
  console.log("Expensive");
};

// const throttle = function(fn, limit)
// {
//          let flag = true;

//        return function () {
//                  if(flag) {
//                      fn();
//                      flag = false;
//                      setTimeout(() => {
//                          flag = true;
//                      }, limit);

//                   }
// }

// }
//everything is good wit above function, but we need to modify it bit more

//     const throttle = function(fn, limit)
// {
//          let flag = true;

//        return function () {
//            let context = this;
//            args = arguments;
//                  if(flag) {
//                      fn.apply(context,args);
//                      flag = false;
//                      setTimeout(() => {
//                          flag = true;
//                      }, limit);

//                   }
// }

// }

// const betterFunction = throttle(expensive, 1000);

const throttle = function (fn, limit) {
  let flag = true;

  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterFunction = throttle(expensive, 1000);



