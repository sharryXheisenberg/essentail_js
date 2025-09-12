// JavaScript promises
// remember each content in this form {key:value} is an object 


// function to find a username 


function getUsers() {
    return [
        {username : 'john' , email :'john@gmail.com'},
        {username : 'alice' , email: 'alice@gmail.com'}
    ];
}

function findUser(username){
    const users = getUsers();
    const user  = users.find((user)=>user.username==username);
    return user;
}

console.log(findUser('john'));

// In practice, the getUsers() function may access a database or call an API to get the user list. Therefore, the getUsers() function will have a delay.

// To simulate the delay, you can use the setTimeout() function. For example:

// you can use the setTimeout() function
//First, define an array users and initialize its value with an empty array.
// Second, assign an array of the users to the users variable inside the callback of the setTimeout() function.
// Third, return the users array
function getUsers() {
  let users = [];
  setTimeout(() => {
    users = [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }, 1000);
  return users;
}

function findUser(username) {
  const users = getUsers(); // A
  const user = users.find((user) => user.username === username); // B
  return user;
}

console.log(findUser('john'));



// promises

function getUsers(){
  return [
    {username:"john",email:'john@gmail.com'},
    {username:'Eon',email:'eon@gmail.com'}

  ];
}

function findUser(username){
  const users = getUsers();
  const user = users.find((user)=>user.username===username);
  return user;
}
console.log(findUser('john'));



// asynchronous function

// function getUsers1(callback){
//   setTimeout(()=>{
//     callback([
//       ()
//     ])
//   })
// }