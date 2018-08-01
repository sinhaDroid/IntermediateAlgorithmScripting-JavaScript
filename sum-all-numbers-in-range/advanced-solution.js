// Sum All Numbers in Range
// Advanced Solution
// [3, 1] & [1, 4]

function sumAll(arr) {
    var sum = 0;
    for (let index = Math.min(...arr); index <= Math.max(...arr); index++) {
        sum += index;
    }
    return sum;
}

console.log(sumAll([3, 1]));
console.log(sumAll([1, 4]));

// Solution
// 6
// 10