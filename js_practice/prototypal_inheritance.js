let arr = ["Chetan", "Rawat"];

let obj = {
    name: "Chetan",
    city: "Dehradun",
    getIntro: function() {
        console.log(this.name + "from" + this.city);
    }
}

//javascript attaches your object without telling you with some hidden property and function.



//arr.__proto == Array.prototype 

//arr.__proto__.__proto__.__proto__ === null 

// in obj object here , object.__proto__ is same as Object.prototype also object.__proto__.__proto__ is null


function fun() {

}

// fun.__proto__ and Function.prototype would be same , and fun.__proto__.__proto__  will be same as Object.prototype


let object2 = {
    name: "Aditya"
}

//never do this
object2.__proto__ = obj;
 

/* 

now object2.__proto__
{name: 'Chetan', city: 'Dehradun', getIntro: ƒ}


object2.city -- 'Dehradun'

*/



