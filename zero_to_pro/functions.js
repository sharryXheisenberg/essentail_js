// variable inside a function
// let varFunction = function() {
//     let variabelFunction = "I'm a vairable function!";
//     console.log("hi there!",variabelFunction)
// }
// varFunction();



// function sayHello(){
//     let you = prompt("What's your name?");
//     console.log("hello!"+you+"!");
// }
// sayHello();



//  Parameters and arguments


function calculator(param1,param2,param3) {
    if(param3 === "+"){
        console.log(`addition of ${param1} and ${param2} numbers`, param1+param2);
    }
    else if(param3 === "-"){
        console.log(`subtraction of ${param1} and ${param2} numbers`, param1-param2);

    }
    else if(param3===""){
        console.log(`default option will be invoked which is addition of ${param1} and ${param2}`,param1+param2);
    }
}

let functionCallOne  = calculator(1,2,"+");
let functionCallTwo = calculator(1,2,"-");
let functionCallThree = calculator(1,2,"");

// console.log(functionCallOne);
// console.log(functionCallTwo);
// console.log(functionCallThree);


//  Recursive functions

function getRecursive(x){
    console.log(x);
    if(x>0){
        getRecursive(--x);
    }
}
getRecursive(3);


function anotherRecursiveFun(nr){
    console.log("Started the recursive function with:",nr);
    if(nr>0){
        anotherRecursiveFun(nr-1);
    }else{
        console.log("done with recursive function");
    }
    console.log("ended up with recursive function value: ",nr);
}

anotherRecursiveFun(3);

function factorial(n){
console.log(n);
    if(n==0) {  
        return 1;
    }
    else{
        return n * factorial(n-1);       
    }
}

console.log("value of factorial",factorial(3));


//setTimeout function()

setTimeout(function(){
    console.log("This msg will be print after 2 seconds!");
},2000)


// Nested functions

// function outerNestedFunction(nr){
//     console.log("Outer function");
//     doInnerFunction(nr);
//     function doInnerFunction(x){
//         console.log(x+7);
//         console.log("I can access outer variable:",nr);
//     }
// }
// outerNestedFunction(2);

// outerFunction((x)=>{
//     console.log("Inside the outer function!");
//     anotherInsideFunction(x);
//     anotherInsideFunction((t)=>{
//         console.log(t+9);
//         console.log("I can access the outer variable!");
//     })
// })
// outerFunction(1);

// exercise

// let start = 10;
// function countDown(x){
//     console.log(x);
//     if(x<1){
//         return ;
//     }
//     else if(x>1){
//         countDown();
//     }
//     else if(x>0){

//     }
// }

// Anonymous functions
//  We will have to store it in a variable in order to call the anonymous  function
let anonymousVar = function() {
    console.log("Inside the anonymous function!");
}

// anonymousVar()


//  Function callbacks
function doFlex(executeStuff){
    // function executeStuff(){
    //     console.log("execute Stuff function is called!"); // if passing parameterized function is not something then it will give priority to that one 
    // }
    executeStuff();
    console.log("Inside the doFlex function");
}
doFlex(anonymousVar); // here anonymous function contains doesn't execute 


let anotherVar = function(){
    console.log("another function callback function");
}
doFlex(anotherVar);


//exercise -
let testFunction = function(){ 
    console.log("Hello"); 
}(); 

let val = 10; 
function tester(val){ 
    val += 10; 
    if(val < 100){ 
        return tester(val); 
    } 
    return val; 
} 
tester(val); 
console.log(val);

//  Use the arrow format to create functions that output the values 
// one and
//  two to the console. Create a third function that outputs the value 
// the console, and then invokes the first two functions.
//  Create a fourth function that outputs the word 
// three to
//  four to the console and also
//  use 
// setTimeout() to invoke the first function immediately and then the
//  third function.
//  What does your output look like in the console? Try to get the console to
//  output:

const one = ()=> console.log("one");
const two = ()=> console.log("two");
const three =()=>{
    console.log("three");
    one();
    two();
};
const fourth = ()=>{
    console.log("Four");
    setTimeout(one,0);
    three();
}
fourth();

var addFive1 = function addFive1(num) { 
return num + 2; 
}; 
let addFive2 = (num) => num + 2; 
console.log(addFive1(14)); 

