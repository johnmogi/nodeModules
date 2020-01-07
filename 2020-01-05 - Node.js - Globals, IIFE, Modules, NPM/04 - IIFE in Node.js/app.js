
// על כל קובץ IIFE יש אוטומטית Node.js-ב
// ברמת הקובץ IIFE לכן אנו לא צריכים לבנות

var num1 = 123;
console.log(num1, global.num1);
function f1() {
    console.log("f1...");
}
f1();
global.f1();

