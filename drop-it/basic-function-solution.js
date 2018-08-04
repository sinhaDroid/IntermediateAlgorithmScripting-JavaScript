// Drop It
// Basic Solution
// [1, 2, 3, 4] & function (n) { return n >= 3; }

function dropElements(arr, func) {
    // Drop them elements
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[0]))
            break;
        else
            arr.shift()
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
}));

// Solution
// [ 3, 4 ]