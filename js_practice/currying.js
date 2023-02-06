/*Function currying can be done by 2 methods
1> It can be done by bind method
2> It can be done by closure.
*/

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);

// let multipleByThree = multiply.bind(this, 4);
// multipleByThree(4);

let multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiplyClosure(2);

multiplyByTwo(3);
