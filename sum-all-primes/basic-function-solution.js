// Sum All Primes
// Basic Solution
// 2, 5, 9, 10

function sumPrimes(num) {
    var res = 0;

    // Function to get the primes up to max in an array
    function getPrimes(max) {
        var sieve = [];
        var i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }

    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
        res += primes[p];
    }
    return res;
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