// Sum All Numbers in Range
// Intermediate Solution
// [3, 1] & [1, 4]

function sumAll(arr) {
    // Using ES6 arrow function (one - linear)
    var sortedArr = arr.sort((a, b) => a - b);
    var firstNum = sortedArr[0];
    var lastNum = sortedArr[sortedArr.length - 1];
    // Using Arithmetic Progressions Summing Formula
    return ((lastNum - firstNum + 1) * (firstNum + lastNum)) / 2
}

console.log(sumAll([3, 1]));
console.log(sumAll([1, 4]));

// Solution
// 6
// 10