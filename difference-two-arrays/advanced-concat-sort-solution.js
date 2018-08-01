// Difference Two Arrays
// Advanced Solution Part 2
// [1, 2, 3, 5, 7] & [1, 2, 3, 4, 5, 8, 9]

function diffArray(arr1, arr2) {
    var newArr = [];

    // Concatenate the two arrays and sort the items in growing order
    var orderArr = arr1.concat(arr2).sort();

    // Looping through the ordered array and push to the empty newArr only the items that have
    // not a twin in the ordered arr (only items that are not equal to the previous nor to the next item)
    for (let index = 0; index < orderArr.length; index++) {
        if (orderArr[index] !== orderArr[index + 1] && orderArr[index] !== orderArr[index - 1]) {
            newArr.push(orderArr[index]);
        }
    }

    return newArr;
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));

// Solution
// [ 7, 4, 8, 9 ]