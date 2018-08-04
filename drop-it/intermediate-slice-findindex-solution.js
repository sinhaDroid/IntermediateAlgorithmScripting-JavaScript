// Drop It
// Intermediate Solution
// [1, 2, 3, 4] & function (n) { return n >= 3; }

function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length, arr.length);
}

console.log(dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
}));

// Solution
// [ 3, 4 ]