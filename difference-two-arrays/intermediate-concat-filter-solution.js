// Difference Two Arrays
// Intermediate Solution
// [1, 2, 3, 5, 7] & [1, 2, 3, 4, 5, 8, 9]

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        );
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));

// Solution
// [ 7, 4, 8, 9 ]