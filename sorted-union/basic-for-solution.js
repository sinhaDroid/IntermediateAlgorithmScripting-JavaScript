// Sorted Union
// Basic Solution
// [1, 3, 2], [5, 2, 1, 4], [2, 1]

function uniteUnique() {
    // Creates an empty array to store our final result.
    var newArr = [];

    // Loop through the arguments objects
    for (let index1 = 0; index1 < arguments.length; index1++) {
        var arrayArguments = arguments[index1];

        // Loop through the array at hand
        for (let index2 = 0; index2 < arrayArguments.length; index2++) {
            var indexValue = arrayArguments[index2];

            // Check if the value is already on the final array
            if (newArr.indexOf(indexValue) < 0)
                newArr.push(indexValue);
        }
    }

    return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Solution
// [ 1, 3, 2, 5, 4 ]