
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


// class declaration in JS
class ClassName{
    constructor(prop1,prop2){
        this.prop1 = prop1;
        this.prop2 = prop2;

        console.log(prop1);
        console.log(prop2);
    }
}

let obj = new ClassName("Argument1","Argument2");

//classes are just some special function beneath the surface. 

function DOG (dogName,weight,color,breed){
    this.dogName = dogName;
    this.weight= weight;
    this.color = color;
    this.breed = breed;
}
let dg = new DOG("Cocky",329.23,"black","labrador");

console.log(dg);

// more example 

class Dg{
    constructor(dg_name,dg_wt,dg_color,dg_breed){
        this.dg_name = dg_name;
        this.dg_wt = dg_wt;
        this.dg_color = dg_color;
        this.dg_breed = dg_breed;
    }
}

let newObj = new Dg("JS",3.3,"indigo","Op!");

console.log(newObj.dg_name,"is a",newObj.dg_breed,"and weights",newObj.dg_wt,"and color",newObj.dg_color);

// constructors 

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
};

let pObj = new Person("Apollo","Shadow");

console.log("Hi",pObj.firstName);
console.log("Hi",pObj.lastName);
console.log("Hello",pObj.firstName + " " + pObj.lastName);

class AnotherOne {
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greet() {
        console.log("Hi! there ",this.firstName);
    }
    compliment(name,object){
        return "thats a wonderful" + object + ","+name;
    }
}

let ok = new AnotherOne("Zgod","chaudhary");
ok.greet();
let op = ok.compliment("Saurabh","car");
console.log(op)

// exercise

class Person1{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
let person1 = "Saurabh";
let person2 = "Pande";

let object = new Person1(person1,person2);
console.log(object.fullName());

// This is how to add properties that aren't accessible from outside. We prefix them with a # symbol

class Car{
    #carColor;
    #carWeight;

    constructor(carColor,carWeight){
        this.#carColor=carColor;
        this.#carWeight = carWeight;
    }

}

let p = new Car("Blue",2500);
console.log("This car have a", p.carColor);   // here we get undefined response

/// If we wanted to make sure we could only create objects with names starting with an "M," we could modify our constructor a bit

// class Car1{
//     constructor(carColor,carWeight){
//         if(carColor.startsWith("M")){
//             this.#carColor = carColor;
//         }else{
//             this.#carColor = "M" + carColor;
//         }
//         this.#carWeight = carWeight;
//     }
// }

// Getters and setters -  Getters and setters are special properties that we can use to get data from a class and to set data fields on the class

// Getters and setters are computed properties. So, they are more like properties than they are like functions
class Persona{
    #firstName;
    #lastName;
    constructor(firstName,lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get firstName(){
        return this.#firstName;
    }
    set firstName(firstName){
        this.#firstName = firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    set lastName(lastName){
        this.#lastName=lastName;
    }
}

let w = new Persona("Saurabh","Pande");
console.log("Hi",w.firstName + " " + w.lastName);

// Inheritance
// Inheritance is one of the key concepts of OOP. It is the concept that classes
//  can have child classes that inherit the properties and methods from the
//  parent class.

// parent vehicle class
class Vehicle{
    constructor(color,currentSpeed,maxSpeed){
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed;
    }
    move() {
        console.log("moving at",this.currentSpeed);
    }
    acclerate(amount){
        return this.currentSpeed+=amount;
    }
}

// child class
class MotorCycle extends Vehicle{
    constructor(color,currentSpeed,maxSpeed ,fuel){
        super(color,currentSpeed,maxSpeed);
        this.fuel = fuel;
    }

    doWheelie(){
        console.log("Doing wheelie during driving!");
    }
}

let lo = new MotorCycle("blue",60,200,"CNG");
console.log(lo);
lo.move();
console.log(lo.acclerate(10));

// A prototype is the mechanism in JavaScript that makes it possible to have
//  objects. When nothing is specified when creating a class, the objects inherit
//  from the 
// Object.prototype prototype.

// add a function to a class using the prototype property.
//prototype is a property holding all the properties and methods of an
//  object. So, adding a function to 
// prototype is adding a function to the class.
//  You can use 
// prototype to add properties or methods to an objec
// t
class MobilePhones{
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
    display(){
        console.log("Your car brand is: " + this.brand + " and the price is " + this.price);
    }
}

MobilePhones.prototype.speed = function(currentSpeed,maxSpeed){
    return `Current speed is: ${this.currentSpeed} and Max speed is ${this.maxSpeed}`;
}

let ll = new MobilePhones("Buggati",100,0,400);
console.log(ll);

ll.display();
console.log(ll.speed());

// exercise 
class Employees{
    constructor(first_name,last_name , noOfYearsWorking){
        this.first_name=first_name;
        this.last_name = last_name;
        this.noOfYearsWorking=noOfYearsWorking;
    }

}
const newPerson1 = new Employees ("Lawrence" , "bishnoi",2);
const newPerson2 = new Employees ("Jane" , "Doe", 3);


const perons=[newPerson1,newPerson2];
Employees.prototype.display = function(){
    return this.first_name + " " + this.last_name + " has worked for " + this.noOfYearsWorking + " years";
}

// let po = new Employees("Saurabh","Pande" , 2);
perons.forEach((person)=>{
    console.log(person.display());
});


// exercise

class MenuItems{
    #offer1 = 10;
    #offer2 = 20;

    constructor(val1,val2){
        this.val1 = val1;
        this.val2 = val2;
    }
    calculate(){
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2); 
    }
    get total() {
        return this.calculate();
    }
}
const val1 = new MenuItems(2,3);
const val2 = new MenuItems(4,2);
const val3 = new MenuItems(1,5);
console.log(val1.total);
console.log(val2.total)
console.log(val3.totalx);
