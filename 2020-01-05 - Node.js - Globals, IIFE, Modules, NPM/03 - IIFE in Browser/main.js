// בג'אווה סקריפט הרצה על דפדפן script-לא טוב לכתוב קוד ישירות בתוך ה
var num1 = 123; // window-שייך לאובייקט ה
console.log(num1, window.num1); // 123, 123
function f1() { // window-שייכת לאוביקט ה
    console.log("f1...");
}
f1();
window.f1();

// IIFE-לכן עטפנו את הקוד ב
(function () { // IIFE = Immediately Invoked Function Expression
    console.log("I'm inside IIFE");

    var num2 = 123; // window-שייך לאובייקט ה
    console.log(num2, window.num2); // 123, undefined
    function f2() { // window-שייכת לאוביקט ה
        console.log("f2...");
    }
    f2();
    window.f2(); // Crash

})();




