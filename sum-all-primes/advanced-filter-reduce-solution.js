// Sum All Primes
// Advanced Solution
// 2, 5, 9, 10

function sumPrimes(num) {
    let arr = Array.from({
        length: num + 1
    }, (v, k) => k).slice(2);
    let onlyPrimes = arr.filter((n) => {
        let m = n - 1;
        while (m > 1 && m >= Math.sqrt(n)) {
            if ((n % m) === 0)
                return false;
            m--;
        }
        return true;
    });
    return onlyPrimes.reduce((a, b) => a + b);
}

console.log(sumPrimes(2));
console.log(sumPrimes(5));
console.log(sumPrimes(9));
console.log(sumPrimes(10));

// Solution
// 2
// 10
// 17
// 17