//polyfill for bind method


let name = {
    firstname: "Chetan",
    lastname:"Rawat"
}

let printName = function(hometown, state, pincode) {
   console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + pincode);
}

// let printMyName= printName.bind(name, "dehradun", "uttrakhand","160047");

let printMyName= printName.bind(name, "dehradun", "uttrakhand");

printMyName("160047"); 

// Function.prototype.mybind= function(...args) {
//     let obj = this;
//     console.log(obj); //it will refer to printName method this --> printName

//     params = args.slice(1);
//     return function () {
//            obj.apply(args[0], params);
//     }   
// }

// let xyz = printName.mybind(name,"chandigarh", "Punjab", "160047");

// xyz();


//but what if we have to pass pincode in the return function , that is printMyName("160047")


Function.prototype.mybind= function(...args) {
    let obj = this;
    console.log(obj); //it will refer to printName method this --> printName

    params = args.slice(1);
    return function (...args2) {
           obj.apply(args[0], [...params, ...args2]);
    }   
}

let xyz = printName.mybind(name,"chandigarh", "Punjab", "160047");

xyz();




//jsvalut for polyfills






////------------------------Map polyfill--------------------------------/////


// array.map(function(currValue, index, arr)) OR array,map(callback[, thisObject]);


Array.prototype.myMap = function (cb) {
    let arr = [];
    console.log (this) // this here will refer the  [1,2,3,4] in this case 

    for (let i=0; i <  this.length; i++) {

        arr.push(cb(this[i]))
    }

    return arr;
}



const nums = [1,2,3,4]
//console.log(nums.myMap());

const addnums = nums.myMap((x) => x + 2)

console.log(addnums);




/////----------------------------------- filter polyfill ----------------------------/////



Array.prototype.myFilter = function (cb) {
    let arr = [];
    console.log (this) // this here will refer the  [1,2,3,4] in this case 

    for (let i=0; i <  this.length; i++) {

        if (cb(this[i])) 
        {
            arr.push(this[i]);
        }
    }

    return arr;
}


let numbering = [2,5,8,9]

const moreThanfive = numbering.myFilter((z) => z > 6);

console.log(moreThanfive);





//////---------------------------------polyfill for reduce----------------------------

//arr.reduce((acc,curr,arr) => {}, initial_value)


Array.prototype.myReduce = function(cb, initial_value) {
    var accumulator = initial_value;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this): this[i];
    }

    return accumulator;
}



const numss = [1,2,3,4];

const manage = numss.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);


console.log(manage);








