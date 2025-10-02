let s = "Hello ";
console.log(
    s.concat("there!")
    .toUpperCase()
    .replace("THERE","you")
    .concat(" You're welcome!")
);

//  Global methods

// The global JavaScript methods can be used without referring to the built-in object they are part of. 
// This means that we can just use the method name as
//  if it is a function that has been defined inside the scope we are in, without
//  the "object" in front of it.

// exmaple
let x=7;
// console.log(Number.isNaN(x));

// instead of this 

console.log(isNaN(x));
// isNaN is made globally available
//  without referring to the class it belongs to (in this instance, the 
// class). 

//  Decoding and encoding URIs
// Encoding is simply converting from one shape to another
let uri = "https://www.example.com/submit?name=maaike van putten"
let encoded_uri = encodeURI(uri);
console.log("Encoded URI: ",encoded_uri);
let decoded_uri = decodeURI(uri);
console.log("Decoded URI: ",decoded_uri);

//This is great for fixing broken URIs, but it's actually a bit useless whenever
//  you need to encode strings that contain any of these characters: 
// / , ? :
//  @ & = + $ #.

// decodeUriComponent() and encodeUriComponent()

newURI = "https://www.example.com/submit?name=this&that=some thing&code=love";
let encoded_Compo_URI = encodeURIComponent(newURI);
let decode_Compo_URI = decodeURIComponent(newURI);
console.log(encoded_Compo_URI);
console.log(decode_Compo_URI);

// exercise 
let exerciseURI = "How's%20it%20going%3F";

let decode = decodeURIComponent(exerciseURI);
let encode = encodeURIComponent("How's it going?");
console.log(decode);
console.log(encode);

//  With the method  parseInt() a string will be changed to an integer.

let str_int = "6";
let int = parseInt(str_int);
console.log(int);


// parseInt() method is not applicable for the float and binary number
let float_num = "4.3";
let binary_string = "0b101";
console.log(parseInt(float_num));
console.log(parseInt(binary_string));

// similarly there is parseFloat() method 
// and if we pass string to parseInt() function then we get the Nan result

let ool = "23.267584392847";
console.log(parseFloat(ool));



// forEach 
let arr = ["Saurabh",23,34,true];

arr.forEach((value,index)=>{
    console.log(`Value: ${value} and Index: ${index}`);
})



// Filtering an array
//  We can use the built-in 
// filter() method on an array to alter which values
//  are in the array. The filter method takes a function as an argument, and this
//  function should return a Boolean. If the Boolean has the value 
// true , the
//  element will end up in the filtered array. If the Boolean has the value
//  false , the element will be left out. You can see how it works here
let asx = ["squirrel",5,true,"Tjed"];

function checkString(element,index){
    return typeof element === "string";
}
let filterArray = asx.filter(checkString);
console.log(filterArray);

//  filter() method returns a new array with the elements that made it through the filter

// every()
console.log(asx.every(checkString));

// The copyWithin() method can be used to replace a part of the array with another part of the array. 

//  map() method you can do just that. This method will return a new array with all the new values.
let a = [1,2,3,4];
let mapped_arr = a.map((x=>x+1));
console.log(mapped_arr);


// copyWithin() method

let app = ["grapeFruit",4,"hello",5.6,true];
app.copyWithin(0,3,5);
console.log(app);

app.copyWithin(0,2);

console.log(app);

//We can find occurrences with 
// indexOf() as we have seen already. To find
//  the last occurrence, we can use the 
// lastIndexOf() 

// remove duplicates from array exercise
const ab = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence" , "Mike","kim"];
 const arr2 = ab.filter ( (value, index, array) => { 
    console.log(value,index,array.indexOf(value)); 
    return array.indexOf(value) === index; 
}); 
console.log(arr2); 


// exercise on map()

let Map = [1,2,3,4,5];

 
console.log(Map.map(x=>x*2));

// When you want to concatenate strings, you can use the  concat() method.

let s1 = "Hello";
let s2 = "Bye!";

let res = s1.concat(s2);
console.log(res);

// with split() method we can convert a string to an array. 
//  split method on what string it should split.

let result = "Hello,JavaScript!";
let arr_res = result.split(",");
console.log(arr_res);

// With the  join() method you can convert an array to a string
let letters = ["a","b","c"];
let z = letters.join();
console.log(typeof(z),z);

// If you want something else other than a comma, you can specify that, like this

let lp = ["a","b","c"];
let mm = lp.join('-');
console.log(mm);    

//  find the index of a string. The
//  indexOf() method returns the index, a single number, of the first character
//  of the substring

let poem = "Roses are red, violets are blue, if I can do JS.";

let idx_if =poem.indexOf("z");
console.log(idx_if); 


// alternative way of searching for a particular substring within a string is
//  to use the 
// search() method:

let searchPattern ="When I see my fellow, I say hello";
let position  = searchPattern.search("I");
console.log(position);
//search() will accept a regex format as input, whereas  takes a string.  indexOf() is faster than the indexOf() just
//  search() method, so if you just
//  need to look for a string, use 
// indexOf() . If you need to look for a string
//  pattern, you'll have to use the 
// search() method

//  Moving on, the 
// indexOf() method is returning the index of the first
//  occurrence, but similarly, we also have a 
// lastIndexOf() method. It returns
// the index where the argument string occurs last. If it cannot find it, it returns-1 .


//  charAt(index)

let pos1 = poem.charAt(10);
console.log(pos1);

// Creating substrings
//  With the slice(start, end) method we can create substrings. This does
//  not alter the original string, but returns a new string with the substring. It
//  takes two parameters, the first is the index at which it starts and the second
//  is the end index. 

// If you leave out the second index it will just continue until the end of the string from the start. The end index is not included in the
//  substring.
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);

console.log(substr1);
console.log(substr2);

// Replacing parts of the string
// If you need to replace a part of the string, you can use the  replace(old,new) method

let hi = "hi";
let new_hi = hi.replace("hi","Yo! dawg");
console.log(new_hi);

// replace() method only replaces one word only like this  and replace() is a case-sensitive

let dra = "Hello Hello";
let newP = dra.replace("Hello","No! dawg");
console.log(newP);

// to replace all words of passed parameters we need to use replaceALL()

let new_dra = "Hello Hello";
let replaceAll_String = new_dra.replaceAll("Hello" ,"Dawg!");
console.log(replaceAll_String);