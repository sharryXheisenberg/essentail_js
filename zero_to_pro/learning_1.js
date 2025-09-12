//  1. Create a prompt to ask the user's age
//  2. Convert the response from the prompt to a number
//  3. Declare a message variable that you will use to hold the console
//  message for the user
//  4. If the input age is equal to or greater than 21, set the 
// message variable
//  to confirm entry to a venue and the ability to purchase alcohol
//  5. If the input age is equal to or greater than 19, set the 
// message variable
//  to confirm entry to the venue but deny the purchase of alcohol
//  6. Provide a default else statement to set the 
// message variable to deny
//  entry if none are true
//  7. Output the response 
// message variable to the console


// import prompt;

// let age = prompt("How old are you?"); 
// age = Number(age); 
// let message; 
// if(age >= 21){ 
//     message = "You can enter and drink."; 
// }else if(age >= 19){ 
//     message = "You can enter but not drink."; 
// }else{ 
//     message = "You are not allowed in!"; 
// } 
// console.log(message); 

let age = 19;

let acccess = age<18 ? "undenied":"allowed";
console.log(acccess);


let activity = "Lunch"
 switch(activity) { 
case "Get up": 
console.log("It is 6:30AM"); 
break; 
case "Breakfast": 
console.log("It is 7:00AM"); 
break; 
case "Drive to work": 
console.log("It is 8:00AM"); 
break; 
case "Lunch": 
console.log("It is 12:00PM"); 
break;   
case "Drive home": 
console.log("It is 5:00PM"); 
break;     
case "Dinner": 
console.log("It is 6:30PM"); 
break; 
} 


// 1. Create an array that contains the variables Rock, Paper, and Scissors.
//  2. Set up a variable that generates a random number 0-2 for the player
//  and then do the same for the computer's selection. The number
//  represents the index values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can
//  show the random results for the player and then also the result for the
//  computer of the matching item from the array.
//  4. Create a condition to handle the player and computer selections. If
//  both are the same, this results in a tie.
//  5. Use conditions to apply the game logic and return the correct results.
//  There are several ways to do this with the condition statements, but
//  you could check which player's index value is bigger and assign the
//  victory accordingly, with the exception of Rock beating Scissors.
//  6. Add a new output message that shows the player selection versus the
//  computer selection and the result of the game

let game = ['Rock','Paper','Scissors'];
let comp =  Math.floor(Math.random() *3);
console.log(comp);  


// let versus var variables
// let is actually not function
// scoped but block-scoped. A block is defined by two curly braces {}
// code within those braces is where 
// let is still available.

function doingStuff(){
    if(true){
        var x = "local";
    }

    console.log(x);    // here we get the value of variable x as var can works in the function scoped 
}   

doingStuff();

// let 

function doingSt(){
    if(true){
        let y = "local";
    }

     //console.log(y);  // here we get reference error that is y is not definedas let is blocked scope means it will only work in {} 
}
doingSt();

// and also we cannot access the varible or console them  before initialing them by using let 
function letKnow() {
    console.log(l);
    let l = "ok bro!";
}

// letKnow();

// but with the var we can access the varible but we will get the 'undefined' result

function varKnow(){
    console.log(v);
    var v = " I am var variable! ";
}
varKnow();


///  const scope are also block scoped they also cannot accessible outside of {} / any block like if or else loop
// we will get this error ' c is not defined'

function constScope(){
    if(true){
        const c = "yeah! bro I know that";
    }

    console.log(c);
}

// constScope();

// global varible

let globalVar = "Accessible everywhere!";

console.log("globally accessible",globalVar);
function localFunction(x){
    console.log("inside function");
    console.log("Still accessible inside the function",globalVar);
}
localFunction("some parameter");


// global variable must be declare at the top of the file not should be in the function

function checkScope(){
    x = "guess the mine scope";
    console.log("Inside the function",x);
}
checkScope();
console.log("Outside of function:", x); 


// immediately invoked function expression (IIFE)   this is also local scoped function 

(function(){
    console.log("IIFE");
})();


// through arrow function way

(()=>{
    console.log("hello bro")
})();

// practice exercise
let c = "1000";

(()=>{
 let  c = "1001";
 console.log(c);
})();

let result = (()=>{
let val = "some thing in the first varible!";
 return val;
})();

console.log(result);
// console.log(val);