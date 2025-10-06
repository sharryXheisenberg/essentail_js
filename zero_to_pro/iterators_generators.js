console.log(Array.from("MATT"));

const m = new Map().set(1,2).set(3,4);
console.log(m);


const s = new Set().add(1)
                   .add(2)
                   .add(3)
                   .add(4);

console.log(s);

// forEach() method
//  there is no way to terminate this iteration, the method is limited to arrays, and the callback  structure is unwieldy.
let collection = ['foo', 'bar' , 'baz'];
collection.forEach((item)=>{
    console.log(item);
}) 

//  The concept of an “iterable” is intentionally abstract. Frequently, the iterable will take the form of a 
// collection object like an array or set, both of which have a finite number of countable elements

// Many built- in types implement the Iterable interface:
//  ➤
//  ➤ Strings
//  ➤
//  ➤ Arrays
//  ➤
//  ➤ Maps
//  ➤
//  ➤ Sets
//  ➤
//  ➤ The arguments object
//  ➤
//  ➤ Some DOM collection types like NodeList

let num = 1;
 let obj = {}; 
 // above are variables and they don't have any Default iterator object or iterator object get invoked after initilization of them.


// Checking for the existence of this default iterator property will expose the factory function:
console.log(num[Symbol.iterator]);
console.log(obj[Symbol.iterator]); 


let str = 'abc';
let arr = ['a','b','c'];
let map = new Map().set('a',1).set('b',2).set('c',3);
let set = new Set().add('a').add('b').add('c');
// let els = document.querySelectorAll('div');

console.log(str[Symbol.iterator]);
console.log(arr[Symbol.iterator]);
console.log(map[Symbol.iterator]);
console.log(set[Symbol.iterator]);
// console.log(els[Symbol.iterator]);

console.log(str[Symbol.iterator]());
console.log(arr[Symbol.iterator]());
console.log(map[Symbol.iterator]());
console.log(set[Symbol.iterator]());



let ab = ['foo','bar','baz'];
// Array destructuring
let [a,b,c] = ab;
console.log(a,b,c);


// spread operator 
let ab2 = ['ok', ...ab];
console.log(ab2);

//// Array.from()
let ab3 = Array.from(ab);
console.log(ab3);

 // Set constructor

 let set1 = new Set(ab);
 console.log(set1);

  // Map constructor
  let pairs = ab.map((x,i)=>[x,i]);
  console.log(pairs);

  let map1 = new Map(pairs);
 console.log(map1);

 //  The Iterator Protocol

//   An iterator is a single- use object that will iterate through whatever iterable it is associated with. The 
// Iterator API uses a next() method to advance through the iterable. Each successive time next() is 
// invoked, it will return an IteratorResult object containing the next value in the iterator. The current 
// position the iterator is at cannot be known without invoking the next() method.

//  The next() method returns an object with two properties: done, which is a Boolean indicating if 
// next() can be invoked again to retrieve more values, and value, which will contain the next value in 
// the iterable or undefined if done is true. 

// Iterable object
let ar = ['foo' , 'bar'];

 // Iterator factory
 console.log(ar[Symbol.iterator]);

 // iterator 

 let iter = ar[Symbol.iterator]();
 console.log(iter);

 console.log(iter.next());
 console.log(iter.next());
 console.log(iter.next());

 // Each iterator represents a one- time ordered traversal of the iterable.
//  Different instances are not aware 
// of each other and will independently traverse the iterable

let iter1 = ar[Symbol.iterator]();
let iter2 = ar[Symbol.iterator]();

console.log(iter1.next());
console.log(iter2.next());
console.log(iter1.next());
console.log(iter2.next());

// If the iterable is mutated during iteration, the iterator will incorporate the changes

let newArr = ['foo','ooz'];
let newIter = newArr[Symbol.iterator]();

console.log(newIter.next());
 newArr.splice(1, 0, 'bar');
console.log(newIter.next());
console.log(newIter.next());
console.log(newIter.next());

// The following example compares an explicit iterator  implementation and a native iterator implementation
class Foo{
    [Symbol.iterator](){
        return{
            next(){
                return {done:false,Value:'foo'};
            }
        }
    }
}
let f = new Foo();
console.log(f[Symbol.iterator]());

//   Custom Iterator Definition

// class Counter{
//     constructor(limit){
//         this.count = 1;
//         this.limit=limit;
//     }

//     next(){
//         if(this.count<=this.limit){
//             return{done:false,value:this.count++};
//         }
//         else{
//             return{done:true,value:undefined};
//         }
//     }
//     [Symbol.iterator](){
//         return this;
//     }
// }
// let count = new Counter(3);
// for(let i of count){
//     console.log(i);
//}

// new Iterator

class Counter{
    constructor(limit){
        this.limit=limit;
    }

    [Symbol.iterator](){
        let cnt = 1;
        this.limit = this.limit;
        
        return{
            next(){
                if(cnt<=limit){
                    return {done:false , value:cnt++};
                }else{
                    return {done:true , value:undefined};
                }
            },
            return(){
                console.log("Exiting early");
                return {done:true};
            }
        };
    }
}

let newCnt = new Counter(4);

for(let i of newCnt){
    if(i>2){
        break;
    }
    console.log(i);
}


let cnt2 = new Counter(5);
try{
    for(let i of cnt2){
        if(i>2){
            throw 'err';
        }
        console.log(i);
    }
} catch(e){};


// Generators are a delightfully flexible construct that offers the ability to pause and resume code execu
// tion inside a single function block. The implications of this ability are profound; it allows for, among 
// many other things, the ability to define custom iterators and implement coroutines