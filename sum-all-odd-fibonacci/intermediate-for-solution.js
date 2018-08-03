// Sum All Odd Fibonacci Numbers
// Intermediate Solution
// sumFibs(10) return 10 b/c all odd fibonacci numbers are less than 10 and are 1, 1, 3 and 5

function sumFibs(num) {
    // Create an array of fibonacci number untill num
    var arrFib = [1];
    for (let index = 1; index <= num;) {
        arrFib.push(index);
        index = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
    }
    // return the sum of odd numbers from the array
    var result = arrFib.reduce(function (prev, curr) {
        if (curr % 2 !== 0) return prev + curr;
        else return prev;
    });

    return result;
}

console.log(sumFibs(4));
console.log(sumFibs(10));

// Solution
// 5
// 10