// Finding elements

let array = [1,2,3,4,"Yo!" , true , 3, 34.233];

// 1) indexOf() – return the first index of the matching element in an array.
let firstIndex = array.indexOf(3);
console.log(firstIndex);

//2) lastIndexOf() – return the last index of the matching element in an array.

let lastIndex = array.lastIndexOf(3);
console.log(lastIndex);

// 3) includes() – check if an element is in an array.

let isIndex = array.includes(true);
if(isIndex){
    console.log("Yes there is true in there!");
}
else{
    console.log("There is no true!");
}

// 4) find() – find an element in an array
// The Array find() method returns the first element in an array, which satisfies a provided test function.

//Here’s the syntax of the find() function:
// basically find() method is use some condition to return the results it just not return simple indexing option
// syntax - : const match = array.find(callbackFn)
// The Array find() method returns the first element in an array, which satisfies a provided test function.

// The find() method accepts a callback function that executes on every element of the array.

// The callbackFn function returns either a truthy or falsy value. If the matching element is found, the callbackFn returns a truthy value or falsy value otherwise.

// callbackFn(element, index, array)

// The callbackFn function takes three arguments:

// element is the current element.
// index the index of the current element.
// array the array that the find() was called upon.
// The find() method executes the callbackFn function for each element in the array until the callbackFn returns a truthy value or there are no more elements to check.
//If the callback returns a truthy value, the find() immediately returns the element and stops searching. Otherwise, it returns 
// undefined

// Basic Array find() method example
const numbers = [1,2,3,4,5];
const x = numbers.find((e) => e%2==0);
console.log({x:2});


// Using the find() method with an array of strings


const names = ['Joe','Paul','GKK','LL'];
const match = names.find((name)=>name.includes('au'));

console.log(match);

// for object 

const todos=[
{
    id : 1,
    task : "Learn Javascript",
    isCompleted : true


} , 
{
    id:2,
    task : "Master react",
    isCompleted : false

} , 

{
    id:3 , 
    task : "Learn Backend",
    isCompleted :true
}
]

const todo = todos.find((todoId)=> todoId.id==2);
console.log(todo);

