//debouncing in javascript
let counter = 0;
const getData = () => {

    //calls an API and gets data 
    console.log("Fetching Data", counter++);
}


const debouncing = function (fn, d) {
    let timer;
    return function () {
        let context = this;
      //  console.log(context);
        args = arguments;
        clearTimeout(timer);

     timer = setTimeout(() => {
                  fn.apply(context,arguments);
        }, d)
    }
}




const betterFunction = debouncing(getData, 300) //only call getdata method if the diff btw key stroke is greater then 300ms 



