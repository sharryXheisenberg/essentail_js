let energy = {
  valueOf() {
    return 100;
  },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);

currentEnergy = energy + 100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);

currentEnergy = energy * 1.5;
console.log(currentEnergy);




// console.log('5' * 2);?
// JavaScript converts the string '5' into a number and multiplies it by 2, resulting in 10.
// in multiplication and division operation js convert the non numberic to numeric one by using of Number()

// dividend = divisor * quotient + remainder
// where |remainder| < |divisor|
let remainder = Infinity % Infinity;
console.log(remainder); // NaN

// If a dividend is a finite number and the divisor is an Infinity, the remainder is the dividend. For example:

//  remainder = 10 % Infinity;
// console.log(remainder); // 10

// const isOdd = (num) => num%2;
// console.log(isOdd(10));

console.log(null == undefined); // true
console.log(null===undefined);
console.log('\n');
// logical operators
console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

console.log('\n');

let b = true;
// let result = b && (1 / 0);
// console.log(result);

let age = 18;
let msg;

age>=16 ? (msg = 'You can drive .') :('You cannot drive');
console.log(msg);

let name= 'Sau';

let ol =  name =='Sau' ? 'Yes':'No';
console.log(ol);

// functions

function add(a,b){
    return a+b;
}
console.log(add(1,2));

// Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value. For example:


function say(message) {
  console.log(message);
}

let result = say('Hello');
console.log('Result:', result);


// passing an arguments to function

function additon() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(additon(1,2));
console.log(additon(1,2,3,4,5));


// Function hoisting - In JavaScript, you can use a function before declaring it
showMe(); // a hoisting example

function showMe() {
  console.log('an hoisting example');
}

// Function hoisting allows you to call a function before declaring it, making the development workflow more smoothly.


// Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of other types.

function add(a, b) {
    return a + b;
}

let sum = add;

// we can have two ways to execute the function.
//1)
 result = add(10, 20);

//  Alternatively, we can call the add() function via the sum variable like this:


let res1  = sum(10,20);
console.log(res1);

// anonymous function 
//  An anonymous function is a function without a name. The following shows how to define an anonymous function:
// to implement anonymous function we need () sign because we will get an error 

let show = function(){
  console.log('anonymous function!');

}
show();

// Immediately invoked function execution

(function() {
    console.log('IIFE');
})();

let person = {
  firstName:"Aron",
  lastName:"finch"
};

(function(){
  console.log(person.firstName + ' ' + person.lastName);
})(person);

setTimeout(function() { console.log('This is an anonymous function'); }, 1000);

// arrow functions
let nol = () =>{
  console.log('arrow function!');
}
nol();

let add1 = () => (a+b);
let res = add(1,2);
console.log(res);