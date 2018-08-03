// Sum All Primes
// Intermediate Solution
// 2, 5, 9, 10

function sumPrimes(num) {
    // Function to check if the number presented is prime
    function isPrime(number) {
        for (let index = 2; index <= number; index++) {
            if (number % index === 0 && number != index) {
                // Return true if it is divisible by any number that is not itself.
                return false;
            }
        }
        // if it is passes the for loop conditions it is a prime
        return true;
    }
    // 1 is not prime so return nothing, also stop the recursive calls.
    if (num === 1) return 0;

    // Check if your number is prime
    if (isPrime(num) === false) {
        // for non primes check the next number down from your maximum number, don't add anything
        // to your answer
        return sumPrimes(num - 1);
    }

    // Check if your number is prime
    if (isPrime(num) === true) {
        // for non primes check the next number down from your maximum number, don't add anything
        // to your answer
        return num + sumPrimes(num - 1);
    }
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