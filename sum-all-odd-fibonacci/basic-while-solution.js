// Sum All Odd Fibonacci Numbers
// Basic Solution
// sumFibs(10) return 10 b/c all odd fibonacci numbers are less than 10 and are 1, 1, 3 and 5

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }
    return result;
}

console.log(sumFibs(4));
console.log(sumFibs(10));

// Solution
// 5
// 10