function getPrimes(a, b) {

    if (a > b) {
        primeAlpha(a, b)
    }
    if (a < b) {
        primeBeta(a, b)
    }
    if (a == b) {
        console.log(a + " is equal to " + b + " try again with different values");
    }
}

function primeAlpha(a, b) {
    console.log(a + " is bigger then " + b);
    let arrReturned = []
    for (let i = b; i < a; i++) {
        arrReturned.push(i)
    }
    returnPrime(arrReturned)
}
function primeBeta(a, b) {
    console.log(a + " is smaller then " + b);
    let arrReturned = []
    for (let i = a; i < b; i++) {
        arrReturned.push(i)
    }
    returnPrime(arrReturned)
}
function returnPrime(numArray) {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        console.log(numArray)
        return true;
    });
}
module.exports = getPrimes;