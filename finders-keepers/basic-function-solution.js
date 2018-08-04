// Finders Keepers
// Basic Solution
// [1, 2, 3, 4] & function(num) { return num % 2 === 0; }

function findElement(arr, func) {
    // Make num defined by default
    var num;

    // Loop through the array and use the function to check
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            // Store the first case and break the loop
            num = arr[index];
            return num;
        }
    }

    // Otherwise return undefined
    return num;
}

console.log(findElement([1, 2, 3, 4], function (num) {
    return num % 2 === 0;
}));

// Solution
// 2