let num = 0x1a;
console.log(num);



// Floating-point numbers
// when you have very big number then   we can use e notation E-notation indicates a number should be multiplied by 10 rasied to a given power
let amount = 3.14e7;
console.log(amount);

// E-notation to represent a very small number
let amt = 5e-7; 
console.log(amt);

// JavaScript numeric separator The numeric separator allows you to create a visual separation between groups of digits by using underscores '(_)' as separators.

// It’s important to note that all numbers in JavaScript are floating-point numbers.
let at = 120201_123.05; 
let expense = 123_450;
let fee = 12345_00;
console.log(typeof(expense));


// boolean
// The boolean’s literal values are case-sensitive. This means that the True and False are valid identifiers but they’re not boolean values.

// JavaScript allows the values of other types to be cast to boolean values. To cast a non-Boolean value to a boolean value, you use the built-in Boolean() function. For example:

let error = "an error occured";
let hasError = Boolean(error);   // here hasError gives true as Boolean() gives true if we pass non empty string to that 
console.log(hasError);

// Data Type	Values converted to true	Value Converted to false
// string	        Any non-empty string	“” (empty string)
// number	         Any Non-zero number	0, NaN
// object	                  Any object	null
// undefined	        (  not relevant)	undefined

let number = 0;
let isNumber = Boolean(number);
console.log(isNumber);

//string

let sel = 'Brock';
let msg = `Hi , I am ${sel}!`;
console.log(msg)


// escaping special characters    
// Windows line break: '\r\n'
// Unix line break: '\n'
// Tab: '\t'
// Backslash '\'
let str = `I\'m a string   `;
console.log(str);

// length of the string 
let str1 = "Hello! how are you?";
console.log(str1.length);

let str2 = "Hello";
console.log(str[str.length -1]); // "o"

// concatenate strings
let name = 'Saurabh';
let surName = 'pande ' + name;
console.log(surName);

//assembling string by piece by piece 
let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className);
// Converting values to string
// toString() method doesn’t work for undefined and null
let st = false;
let newStr = st.toString();
console.log(newStr);
let back = Boolean(newStr);
console.log(back);

//JavaScript Objects
// empty object using object literal

let obj ={};
// defining the properties we have to use key : value pair 

let person = {
    firstName:"Saurabh",
    lastName:"Pande"
}

// To access a property of an object, you use one of two notations: the dot notation and array-like notation.

console.log(person.firstName);
console.log(person.lastName);

console.log('\n');
// accessing witb Array-like notation ( [])
console.log(person['firstName']);
console.log(person['lastName']);

// When a property name contains spaces, you need to place it inside quotes. For example, the following address object has the 'building no' as a property:
let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};
// to access this we need to use array like operator we cannot use .(dot) operator

console.log(address['building no']);
// console.log(address.'building no')  // this will give error 

// Modifying the value of a property
let person1 = {
    firstName : 'SP',
    lastName1 : 'LP'
};

person1.firstName = 'Up';
person1.age = 23; // Unlike objects in other programming languages such as Java and C#, you can add a property to an object after object creation.
console.log(person1);

// Deleting a property of an object

// syntax - delete objectName.propertyName;

delete person1.firstName;
console.log(person1);

console.log(person1.firstName); // undefined after deleting the firstName property

//Checking if a property exists
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};

console.log('ssn' in employee);
console.log('employeeId' in employee);
console.log('firstName' in person1);

// JavaScript has two different types of values:

// Primitive values
// Reference values

// Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.
// When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.

// Static data is the data whose size is fixed at compile time. Static data includes:

// Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)

// Unlike the stack, JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed.

// Copying values

// copying on primitive type 
//On the stack memory, the newAge and age are separate variables. If you change the value of one variable, it won’t affect the other.

let age = 25;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge);

// for reference vairable
let family = {
    name :"john",
    age:20

}
let member = family;

member.surname = "rollins";
member.age = 30;

console.log(family);
console.log(member);


// array = In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index:
// First, an array can hold values of mixed types. For example, you can have an array that stores elements with the types number, string, boolean, and null.
// Second, the size of an array is dynamic and auto-growing. In other words, you don’t need to specify the array size up front.

// defining js arrays
let scores = new Array();
// To create an array and initialize it with some elements, you pass the elements as a comma-separated list into the Array() constructor.
let newScores = new Array(9, 10, 8, 7, 6);
console.log(newScores);

// However, when you pass a value of another type like string into the Array() constructor, you create an array with an element of that value. For example:
let athletes = new Array(3); // creates an array with initial size 3
 scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'

// The more preferred way to create an array is to use the array literal notation:
let colors = ['red',0, "blue",12.1];
console.log(colors);

// Accessing JavaScript array elements
let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];


console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

mountains[2] = 'K2';
console.log(mountains);
// Getting the array size
let mobiles = ['iphone' , 'Xiamoi' , 'realme'];
console.log(mobiles.length);

// Basic operations on arrays

// 1) Appending an element to an array

let cp = ['c++','Go'];
cp.push('7Sea');
console.log(cp);

// 2)Adding an element to the beginning of an array
// To add an element to the beginning of an array, you use the unshift() method
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.unshift('Red sea');
console.log(seas);

// 3) Removing an element from the end of an array
// To remove an element from the end of an array, you use the pop() method:

let seas1 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
const lastEle = seas1.pop();
console.log(lastEle);

// 4) Removing an element from the beginning of an array
// To remove an element from the beginning of an array, you use the shift() method:
let seas2 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
const firstEle = seas2.shift();
console.log(firstEle);
console.log(seas2);

// 5) Finding an index of an element in the array
// To find the index of an element, you use the indexOf() method:

let countries = ['India' ,'USA','Japan' , 'Monaco'];
let indx = countries.indexOf('USA');
console.log(indx);

// 6) Check if a value is an array
// To check if a value is an array, you use Array.isArray() method:
console.log(Array.isArray(countries)); // true



