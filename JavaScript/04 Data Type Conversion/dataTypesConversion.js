// Data Types Converssion

let score = "33";

console.log(typeof score);

let valueNumber = Number(score);

console.log(typeof valueNumber);

// Note:
/*
        score 33 => typeof => number
        score 33abc => typeof => NaN
        score undefined => typeof => NaN
    */

let name = "Ayush";

let conversionName = Boolean(name);
let name2 = " ";

let conversionName2 = Boolean(name2);

console.log(typeof conversionName);
console.log(typeof conversionName2);

/* Note:
    String "Ayush" => Boolean True
    String " " => Boolean False
    */

let value = 3;
let newValue = -value;
console.log(newValue);

let acc_name = "Ayush";
let acc_surname = "Sharma";

console.log(acc_name + acc_surname);

console.log(1 + 2 + 3 + "4");
console.log("1" + 3 + 4 + 5);

console.log(+true);
console.log(+false);
console.log(+"");
console.log(+"Ayush");

// Comparsion

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Strict Check

console.log("2" === 2);
