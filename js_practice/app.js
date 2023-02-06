class Car {
  constructor(vehicle) {
    this.vehicle = vehicle;
  }

  move() {
    console.log('drive', this.vehicle);
  }
}

class Bike {
  constructor(vehicle) {
    this.vehicle = vehicle;
  }

  move() {
    console.log('ride', this.vehicle);
  }
}


function getVehicle(vehicle) {
  switch (vehicle.type) {
    case 'bike':
      return new Bike(vehicle);

    case 'car':
      return new Car(vehicle);
    default:
      break;
  }
}

let vehicle = getVehicle({ type: 'bike' });

vehicle.move();

// if (x == 10) {
//   console.log('x is 10');
// } else {
//   console.log('x is not 10');
// }

// using ternary

var x = 10;

x == 10 ? console.log('x is 10') : console.log('x is NOT 10');

for (i = 0; i < 10; i++) {
  console.log(i);
}

var items = [1, 2, 3, 4];

for (i = 0; i < items.length; i++) {
  console.log(items[i]);
}

//for in loop to iterate over an object

var myObj = { foo: 'Dan', bar: 2 };

for (var x in myObj) {
  console.log(x);
  console.log(myObj[x]);
}

var image = [1, 2, 3];

for (var x of image) {
  console.log(x);
}

function getSquare(item) {
  return item * item;
}

const numbers = [1, 2, 3, 4];

const squareOfNumbers = numbers.map(getSquare);

console.log(squareOfNumbers);

function getSum(result, item) {
  return result + item;
}

const sumOfNumbers = numbers.reduce(getSum, 0);

console.log(sumOfNumbers);

function isGreaterThanTwo(item) {
  return item > 2;
}

var greaterThantwo = numbers.filter(isGreaterThanTwo);

console.log(greaterThantwo);

function gettingSquare(item) {
  return item * item;
}

const numbers1 = [1, 2, 3, 4];

const squareOfNumbers1 = numbers1.map(gettingSquare);

console.log(squareOfNumbers1);




