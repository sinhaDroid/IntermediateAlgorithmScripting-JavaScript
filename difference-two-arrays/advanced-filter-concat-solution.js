// Difference Two Arrays
// Advanced Solution Part 1
// [1, 2, 3, 5, 7] & [1, 2, 3, 4, 5, 8, 9]

function diffArray(arr1, arr2) {
    return arr1
        .filter(el => !arr2.includes(el))
        .concat(
            arr2.filter(el => !arr1.includes(el))
        );
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));

// Solution
// [ 7, 4, 8, 9 ]