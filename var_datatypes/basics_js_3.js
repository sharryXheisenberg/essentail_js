// In general, the this references the object of which the function is a property. In other words, the this references the object that is currently calling the function.

// Suppose you have an object counter that has a method next(). When you call the next() method, you can access the this object.

let counter  = {
    cnt :0,
    next: function(){
        return ++this.cnt;
    },
};

let v = counter.next();
console.log(v);

// Global context
//In the global context, the this references the global object, which is the window object on the web browser or global object on Node.js.

//This behavior is consistent in both strict and non-strict modes. Here’s the output on the web browser:
// this.color= 'Red';
// console.log(window.color); // 'Red'

//use the directive "use strict" at the beginning of the JavaScript file. If you want to apply the strict mode to a specific function only, you place it at the top of the function body.

function show() {
    "use strict";
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();

// Introduction to the factory functions in JavaScript
// A factory function is a function that returns a new object. The following creates a person object named person1:


let person1={
    firstName : 'Saurabh',
    lastName : 'Pande',
    getFullNamr() {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(person1.getFullNamr());

// Suppose that you need to create another similar object called person2 
// if the person1 and person2 objects have the same properties and methods.

// The problem is that the more objects you want to create, the more duplicate code you have.

// To avoid copying the same code all over again, you can define a function that creates the person object:

function createPerson(firstName , lastName){
    return{
        firstName:firstName,
        lastName:lastName,
        getFullName(){
            return firstName + ' ' + lastName;
        },
    };
};

let memeber1 = createPerson('alice','rogers');
let memebe2 = createPerson('bob','fischer');

console.log(memeber1.getFullName());
console.log(memebe2.getFullName());
// When a function creates and returns a new object, it is called a factory function. The createPerson() is a factory function because it returns a new person object.

// The Object.create() method
//The Object.create() method creates a new object using an existing object as the prototype of the new object:


var getActions = {
    getFullName1(){
        return this.firstName + ' ' + this.lastName;
    }
};

function createPers(firstName,lastName){
    let famliy = Object.create(getActions);
    famliy.firstName = firstName;
    famliy.lastName = lastName;
    return famliy;
}
let new1 = createPers('LA','Knight');
let new2 = createPers('AJ','Styles');

console.log(new1.getFullName1());
console.log(new2.getFullName1());

// JavaScript Array type provides a very powerful splice() method that allows you to insert, replace, and delete an element from an array.
// The splice() method modifies (or muate) the original array. To create a new array from the original with some element inserted, deleted, and replaced, you can use the toSpliced() method.

// Deleting elements using the splice() method 
// To delete elements in an array, you pass two arguments into the splice() method as follows:
// syntax -> const removedElements = array.splice(start, deleteCount);

let scores = [1,2,3,4,5];

let newArra = scores.splice(0,3);
console.log(`{$scores}`)
console.log(newArra);

// Inserting elements using the JavaScript Array splice() method
// SYNTAX:Array.splice(start, 0, new_element_1,new_element_2,...);  

// The start argument specifies the starting position in the original array in which the new elements will be inserted.
// The second argument is zero (0) that instructs the splice() method not to delete any array elements.
// The third argument, fourth argument, and so on are the new elements inserted into the array.

const colors = ['red', 'green', 'blue'];

colors.splice(2, 0, 'purple');

console.log(colors);


let arbitaryS = [1 , 2 , 3 , 'dds' , '22esdsd'];


arbitaryS.splice(0,2);  // delete
console.log(arbitaryS)

console.log('\n');

arbitaryS.splice(3,0 , 56,65,"f");  // insert
console.log(arbitaryS);

console.log('\n');

arbitaryS.splice(1,1,"End game");
console.log(arbitaryS);

// Replacing elements using the JavaScript Array splice() method
// The splice() method lets you insert new elements into an array while simultaneously deleting existing elements.
let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log(languages);

