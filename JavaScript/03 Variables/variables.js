// Variables

// Var

var a = 10;

function ayu() {
  var a = 20;

  console.log("a work as block scope: " + a);
}
ayu();

console.log("a work as global scope: " + a);

// Let

let b = 20;
function ayu1() {
  let b = 30;

  console.log("b work as block scope: " + b);
}
ayu1();

console.log("b work as global scope: " + b);

// const

const c = 10;

function ayu3() {
  const c = 30;

  console.log("c work as block scope: " + c);
}
ayu3();

console.log("c work as global scope: " + c);

// Var: we can redeclare the var variable (Function Scoped)

var name = "Hello Ayush";
var name = "ayush";

var age = 10;

console.log(name + " your age is: " + age);

// Let: we cannot redeclare the let variable (Block Scoped)

let num = 12;

let prefix = "ayu";

num = 13;

console.log(num + " " + prefix);

// Const: It is immutable we cannot change it or cannot redeclare it:

const d = 5;
let e = "ayu";

console.log(d + " " + e);
