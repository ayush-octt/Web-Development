"use strict"; // Treat All Code As A Newwer Version

// Data Types

// Integer
let a = 232;

console.log(a, typeof a);

// Float
let b = 3.23;

console.log(b, typeof b);

// String
let c = "Ayush Sharma";

console.log(c, typeof c);

// Boolean
let d = true;

console.log(d, typeof d);

// Null
let e = null;

console.log(e, typeof e);

// Undefined
let f;

console.log(f, typeof f);

// Symbols
let g1 = Symbol("Ayush");
let g2 = Symbol("Sharma");

console.log(g1 == g2, typeof (g1, g2));

// BigInt
let h = BigInt(287238728937289);
console.log(h, typeof h);

// Reference Type:

// Array:

const myArray = ["Ayush", "Sharma", 45];
console.log(myArray);

// Object

let my_obj = {
  name: "Ayush",
  age: 22,
};

// Function

let my_function = function () {
  console.log("Hello World");
};

// Stacks And Heap

/*
  Stacks are used in Primitive => When you declare a variable you recieve a copy
  Heap are used in Non-Primitive => Reference of original value when you change anything it changes in original value

*/

let myName = "Ayush Sharma";
let anothername = myName;
console.log(myName);
console.log(anothername);

let userOne = {
  email: "ayushsharmaoctt@gmail.com",
  upi: "upi@gpay123",
};

let userTwo = userOne;
userTwo.email = "ayushsharma@gmail.com";
console.log(userOne);
console.log(userTwo);
