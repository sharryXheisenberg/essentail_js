//  creating the array 

let arr = [1,3,5,7,9];

let cars = ["Toyota","Renault","Volkswagen"];

// overwriting the element at index 0 and with negative index 

console.log(cars);
cars[0] = "Tesla";
cars[-1] = "Nothing";
console.log(cars[-1]);

let numbers=[12, 24, 36];
numbers[5] = 20;

console.log(numbers.length);
console.log("numbers:",numbers);

// array methods
//1) push

let fruits = ["grapefruit","orange","lemon"];
fruits.push("apple");

let lenOfFruits = fruits.push("lime");
console.log(lenOfFruits);//The value gets added to the end of the array. The push method returns the new length of the array
console.log(fruits);

//2)splice method
let shapes = ["circle","triangle","rectangle","pentagon"];
shapes.splice(2,0,"square","rhombus");

// console.log(shapes);

shapes.splice(2,2,"square","rhombus");
// console.log(shapes);

shapes.splice(2,12,"square","rhombus");
console.log(shapes);

// 3) concat() method

let arr1 = [1,3,4,5];
let arr2 = [2,4,6,7];

let arr3 = arr1.concat(arr2);
console.log(arr3);

//4)pop()

//removing the last element
let Arr =[1,2,3,4,5,6,7,8,9,10];
Arr.pop();
console.log(Arr);


//deleting the first element throgh shift() funtion and shifting the array to the left

Arr.shift();
console.log(Arr);

// deleting with the splice    arr.splice(startingIdx,NoOfElementsDelete)
Arr.splice(1,3);   
console.log(Arr);

// find() function

let arr9 = [ 2, 6, 7, 8 ];
let findIndex = arr9.find(e=>e===8);
console.log(findIndex);

let findVal = arr9.find(function(e){return e===10});
console.log(findVal);

// indexOf() function

let arr7=[1,2,3,4];
let findIndexof = arr7.indexOf(2);
let secondIndexof = arr7.indexOf(1);
console.log(findIndex,secondIndexof);


// lastIndexOf()
let animals =["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");

// sorting()

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);

// reverse()

let newNames = ['Alicia', 'Bert', 'Fatiha', 'James', 'Maria'];
newNames.reverse();
console.log(newNames);

// Practice exercise 3.2
//  1. Create an empty array to use as a shopping list.
//  2. Add Milk ,  Bread , and 
// 3. Update "
//  Apples to your list.
//  Bread " with 
// Bananas and 
// Eggs .
//  4. Remove the last item from the array and output it into the console.
//  5. Sort the list alphabetically.
//  6. Find and output the index value of 
// Milk .
//  7. After Bananas , add 
// Carrots and 
// Lettuce .
//  8. Create a new list containing 
// Juice and Pop .
//  9. Combine both lists, adding the new list twice to the end of the first list.
//  10. Get the last index value of 
// Pop and output it to the console.

let shoppingCart =["Milk", "bread", "Apples"];

shoppingCart[1] = "Banana";
console.log(shoppingCart.pop());

shoppingCart.sort();
let IdxOfMilk = shoppingCart.indexOf("Milk");
console.log(IdxOfMilk);

console.log('\nYes');

shoppingCart.splice(2,0,"Carrots" , "Lettuce");
console.log(shoppingCart);


// Multidimensional arrays

let marr1 = [1,2,3];
let marr2 = [4,5,6];
let marr3 = [7,8,9];

let someArray = [marr1,marr2,marr3];
console.log(someArray);

// middle value of a multidimensional array

let middleElement = someArray[1][1][1];
console.log(middleElement);

// exercise
// 1. Create an array containing three values: 1, 2, and 3.
//  2. Nest the original array into a new array three times.
//  3. Output the value 2 from one of the arrays into the console

let exerciseArray = [1,2,3];
let newArray = [exerciseArray,exerciseArray,exerciseArray];
console.log(newArray[0][1]);
// let a = newArray[0][1];
// console.log(a);

// objects
let dog = 
{        dogName:"Moti",
         weight: 23,
         breed: "GermanShepard",
         age:3,
         burglarBite:true
};

let dgName = dog.dogName;
console.log(dgName);

dog.dogName = "Dhruv rathi";
console.log(dog);

//  Practice exercise

//  1. Create a new 
// myCar object for a car. Add some properties, including,
//  but not limited to, 
// make and 
// model , and values for a typical car or
//  your car. Feel free to use booleans, strings, or numbers.
//  2. Create a variable that can hold the string value 
// color . This variable
//  containing a string value color can now be used to reference the
//  property name within 
// myCar . Then, use the variable within the square
//  bracket notation to assign a new value to the color property in 
// myCar .
//  3. Use that same variable and assign a new property string value to it,
//  such as 
// forSale . Use the bracket notation once again to assign a new
//  value to the 
// forSale property to indicate whether the car is available
//  for purchase.
//  4. Output 
// make and 
// model into the console.

// 5. Output the value of 
// forSale into the console

let myCar = {
    model:"BE6",
    make:"company manifactured",
    company:"Mahindra",
    engineType:"Electrical transmission",
    fuelType:"EV",
    mileage:10,
    groundLengthInInches:20,
    secondHand:false
};

myCar["color"] = "Blue";
// console.log(myCar);

myCar["forSale"] = "Yes";
console.log(myCar.model);
console.log(myCar.make);
console.log(myCar.forSale);


// Arrays in object

let company = {
    companyName:"TopG",
    revenue:"10000$",
    activities:['logistics','system management ','production'],
    address:{
        street:"road no.2",
        number:"123",
        zipcode:"413102",
        city:"Ohio",
        state:"Florida"
    },
    yearOfEstablishement:2021
}

let companyActivity = company.activities[1];
console.log(companyActivity);

// Objects in arrays in object

let  newCompany = { companyName: "Healthy Candy", 
                    activities: [ "food manufacturing",  
"improving kids' health",  
"manufacturing toys"], 
                    address: [{ 
                      street: "2nd street", 
                      number: "123", 
                      zipcode: "33116", 
                      city: "Miami", 
                      state: "Florida" 
                    }, 
                    { 
                      street: "1st West avenue", 
                      number: "5", 
                      zipcode: "75001", 
                      city: "Addison", 
                      state: "Texas" 
                    }], 
                    yearOfEstablishment: 2021  
                  }; 

                
console.log(newCompany);

let zipCode = newCompany.address[1].zipcode;

console.log(zipCode);



let companyProductCatalog = []
let item1 ={
    name:"computer",
    model:"windows",
    cost:1000
};

let item2 ={
    name:"Printer",
    model:"HP100C",
    cost:2348792
};

let item3 = {
    name:"TV",
    mmodel:"Acer 11",
    cost:11000
};

companyProductCatalog.push(item1,item2,item3);

console.log(companyProductCatalog[1]);
console.log(companyProductCatalog[2]);


const myArr2 = []; 
myArr2[10] = 'test'
 console.log(myArr2); 
console.log(myArr2[2]); 


const myArr = [1,3,5,6,8,9,15]; 
myArr.splice(1,1,4); 
console.log(myArr);