// function double(value){
//     setTimeout(()=> console.log(value*2),2000);
// }

// double(3);


//  Returning Asynchronous Values
// function anotherDouble(value,callback){
//     setTimeout(()=> callback(value*2),1000);
// }

// anotherDouble(3,(x)=> console.log(`I was given: ${x}`));

// Handling Failure
// The possibility of failure needs to be incorporated into this callback model as well, so this typically  took the form of a success and failure callback

function failureCallback(value , success , failure){
    setTimeout(()=>{
        try{
            if(typeof value!== 'number'){
                throw 'Must provide number argument first!';
            }
            success(2*value);
        }
        catch(e){
            failure(e);
        }
    },1000);
}

const successCallback = (x) => console.log(`Success:${x}`);
const failure = (e) => console.log(`Failure: ${e}`);


failureCallback(3,successCallback,failure);
failureCallback('b',successCallback,failure);

// Nesting Asynchronous Callbacks

function anotherCallBack(val,success,failure){
    setTimeout(()=>{
        try{
            if(typeof val!=='number'){
                throw `Strictly provide number argument!`;
            }
            success(2*val);
        }
        catch(e){
            failure(e);
        }
    },1000);
}


const sucCallBack = (x) =>{
    anotherCallBack(x,(y)=>console.log(`Success:${y}`));
}

const faiCallBack = (e) => console.log(`Failure: ${e}`);

anotherCallBack(3,sucCallBack,faiCallBack);


// callback
//  Callbacks are the first thing we should understand when we are talking
//  about concurrency. The good news is that the 
// callback principle is not too
//  hard to understand. It is just a function that takes another function as an
//  argument, which is then called when the rest of the initial function has
//  finished.

function doSomething(callback){
    callback();
}

function sayHi(){
    console.log("Hi!!");
}
doSomething(sayHi);


// another example
function judge(grade){
    switch(true) {
        case grade == "A":
            console.log("You got an", grade , ":amazing!");
            break;
        case grade == "B":
            console.log("You got an", grade , ":well done!");
            break;
        case grade == "C":
            console.log("You got an", grade , ":ok!");
            break;
        case grade == "D":
            console.log("You got an", grade , ":hmm....!");
            break;
        case grade == "F":
            console.log("You got an", grade , ":Bro you are failed!");
        default:
            console.log("Write correct grade or you are an absent?");
    }
}
function getGrade(score,callback){
    let grade;
    switch(true){
        case score >=90:
            grade = "A";
            break;

        case score >=80:
            grade = "B";
            break;

        case score >=70:
            grade = "C";
            break;

        case score >=60:
            grade = "D";
            break;

        default:
            grade = "F";
    }
     callback(grade);

};

getGrade(85,judge);



//  setTimeOut() and setInterval() 

// setInterval(encourage,500);

// function encourage(){
//     console.log("You are bro! (it is called after 500ms)");
// }


// exercise
function greet(fullName){
    console.log(`Hi! , ${fullName[0]} ${fullName[1]}`);
}

function getUserName(userFullName , callback){
    let name = userFullName.split(" ");
    callback(name); // why this callback is used 
}
getUserName("Saurabh Pande",greet);

// PROMISES
//  A Promise is a special object that connects codethat needs to produce a result and the code that needs to use this result in the next step

//  
// resolve or 
// res
//  resolve() is called, the Promise is presumed to be successful and
//  whatever is between the arrows is returned and used as input for the 
// then
//  method on the 
// Promise object. 

//  If reject() is called, the and the catch() method on the Promise failed
//  Promise object (if present) is executed
//  with the argument of the 
// reject() function.

let promise = new Promise(function(resolve,reject){
    let x = 20;

    if(x>10){
        resolve(x);
    }else{
        reject(`Too low ${x}`);
    }
});

promise.then(
    function (value){
        console.log("Success:",value);
    },
    function (error){
        console.log("Error:",value);
    }
);

//  then() is a Promise itself, so when it returns we can use the result for the next then() instance. This means we can chain the then() instances,

const prom = new Promise((resolve,reject)=>{
    resolve("Success");
    reject("Opps...");
})
.then(value=>{
    console.log(value);
    return "we";
})
.then(value=>{
    console.log(value);
    return "are";
})
.then(value=>{
    console.log(value);
    return "seeing";
})
.then(value=>{
    console.log(value);
    return "Promise chaining";
})
.then(value=>{
    console.log(value);
})
.catch(value=>{
    console.log(value);
})

function fetchData(){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve("Data fetched successfully!");
            }else{
                re
            }
        })
    })
}