let name = {
  firstname: 'Chetan',
  lastname: 'Rawat',
};

let printName = function (hometown, state) {
  console.log(
    this.firstname + ' ' + this.lastname + ' , ' + hometown + ' , ' + state
  );
};

let printMyName = printName.bind(name, 'Dehradun');
printMyName('Uttrakhand');

/*We need to create our own execution of bind method */

//since bind function can be called by every function, so we need to amke sure whaterver function we make similar to bind
//it can be accessed by all the function
Function.prototype.mybind = function (...args) {
  let obj = this;
 console.log(this);
  params = args.slice(1);
  return function (...args2) {
    // obj.call(args[0]);
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printName1 = function (hometown, state) {
  console.log(
    this.firstname + ' ' + this.lastname + ' , ' + hometown + ' , ' + state
  );
};

let printMyName2 = printName1.mybind(name, 'Chandigarh');
printMyName2('Punjab');
