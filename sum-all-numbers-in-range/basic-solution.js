// Sum All Numbers in Range
// Basic Solution
// [3, 1] & [1, 4]

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (let index = min; index <= max; index++) {
        temp += index;
    }
    return temp;
}

console.log(sumAll([3, 1]));
console.log(sumAll([1, 4]));

// Solution
// 6
// 10