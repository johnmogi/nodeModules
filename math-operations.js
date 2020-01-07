function getPrimes(a, b) {

    if (a > b) {
        primeAlpha(a, b)
    }
    if (a < b) {
        primeAlpha(b, a)
    }
    if (a == b) {
        console.log(a + " is equal to " + b + " try again with different values");
    }
}

function primeAlpha(a, b) {
    console.log(a + " is bigger then " + b);
    let arrReturned = []

    for (let i = b; i < a; i++) {
        isPrime(i)
    }

    function isPrime(num) {
        // console.log(num)
        if (num < 2) return false;
        for (var i = 2; i < num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
    for (var i = 0; i < a; i++) {
        if (isPrime(i)) console.log(i);
    }
}

module.exports = getPrimes;