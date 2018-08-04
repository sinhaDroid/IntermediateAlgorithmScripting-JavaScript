// Finders Keepers
// Intermediate Solution
// [1, 2, 3, 4] & function(num) { return num % 2 === 0; }

function findElement(arr, func) {
    // Filter array with function provided
    var filterArr = arr.filter(func);

    // return the first element that returns true, or undefined if no elements return true
    return filterArr[0];
}

console.log(findElement([1, 2, 3, 4], function (num) {
    return num % 2 === 0;
}));

// Solution
// 2