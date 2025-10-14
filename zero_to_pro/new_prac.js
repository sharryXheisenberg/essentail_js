async function foo(){
    console.log(1);
    return 3;
}

foo().then(console.log);
console.log(2);


// another example

async function boo(){
    console.log("op");
    return Promise.resolve(3);  // fulfilled state
}
boo().then(console.log);
console.log("not op bro")

// However, promise rejection errors will not be captured by the async function:
// async function poo(){
//     console.log(1);
//     Promise.reject(3);
// }

// poo().catch(console.log);
// console.log(2);

let  p  = new Promise ((resolve,reject)=>setTimeout(resolve,1000,3));
p.then((x)=>console.log(`ok bro `+ x));


// this can be return as this 
async function opp(){
    let o = new Promise((resolve,reject)=>setTimeout(resolve,1000,3));
    console.log(await p);
}
opp();


