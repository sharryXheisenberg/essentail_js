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



// PROMISES
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