const name = "Ayush";
const repoCount = 50;

console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

const surname = new String("Sharma-sh-ar-ma");

console.log(surname[0]);
console.log(surname.__proto__);

console.log(surname.length);
console.log(surname.toUpperCase());
console.log(surname.charAt(2));
console.log(surname.indexOf("a"));

const newsurname = surname.substring(0, 4);
console.log(newsurname);

const newsur = surname.slice(-4, 4);
console.log(newsur);

const testName = "     ayush  ";
console.log(testName);
console.log(testName.trim());

const url = "https://www.google%30.com";
console.log(url.replace("%30", ""));

console.log(url.includes("google"));

console.log(surname.split("-"));
