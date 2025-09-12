class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let jon = new Person("John doe");


// arrow functions

let add = (x,y)=>{
    return x+y;
};

let ok = add(10,20);
console.log(ok);


// expression - (p1,p2,p3 ---- , pn) => expression;

// callback function

function isOdd(number){
    return number%2!=0;
}

function filter(numbers,fn){
    let res = [];
    for(const number of numbers){
        if(fn(number)){
            res.push(number);
        }
    }

    return res;

}

// let numbers =[1, 2, 4, 7, 3, 5, 6];
// console.log(filter(numbers,isOdd));


// through arrows functions

function filte1(numbers,callback){
    let res = [];
    for(const number of numbers){
        if(callback(number)){
            res.push(number);
        }
    }
    return res;
}

let numberS = [1, 2, 4, 7, 3, 5, 6];

let oddNumbers = filte1(numberS,(number) =>number%2!=0);
console.log(oddNumbers);


// class inheritance

class Animal{
    constructor(legs){
        this.legs = legs;
    }

    walk(){
        console.log("The bird with "+ this.legs + " legs");
    }
}

class Bird extends Animal{
    constructor(legs){
        super(legs);
    }
    fly(){
        console.log('flying');
    }
}

let bird = new Bird(2);
bird.walk();
bird.fly();