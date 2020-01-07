// Module - באפליקציה .js זהו כל קובץ
// app.js במקרה שלנו הוא Main Module הקובץ הראשי נקרא

const calc = require("./calc");

console.log(calc.add(10, 20));
console.log(calc.sub(10, 20));
console.log(calc.mul(10, 20));
console.log(calc.div(10, 20));

const printArray = require("./print-array");
printArray([12, 23, 34, 45, 56]);

const Cat = require("./cat");
const myCat = new Cat("Mitsi", 4);
myCat.display();
