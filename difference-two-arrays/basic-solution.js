// Difference Two Arrays
// Basic Solution
// [1, 2, 3, 5, 7] & [1, 2, 3, 4, 5, 8, 9]

function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        // Looping through an array to find elements that don't exists in another array
        for (let index = 0; index < first.length; index++) {
            if (second.indexOf(first[index]) === -1) {
                // pushing the elements unique to first to newArr
                newArr.push(first[index]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));

// Solution
// [ 7, 4, 8, 9 ]