
//setTimeout function()

// setTimeout(function(){
//     console.log("This msg will be print after 2 seconds!");
// },2000)

function opBro(x){
    console.log(`Yo!dawg +${x} times`);
};

setTimeout(opBro,2000,3);

// How to Cancel the setTimeout Method
//You can also prevent the setTimeout() method from executing the function by using the clearTimeout() method.

let timeOutId = setTimeout(function(){
    console.log("learning the clearTimeout() function");
},2000);

clearTimeout(timeOutId);
console.log(`Timeout ID:${timeOutId} has been declared`);