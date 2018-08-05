// Sorted Union
// Advanced Solution using es6 Part 2
// [1, 3, 2], [5, 2, 1, 4], [2, 1]

function uniteUnique() {
    var args = Array.from(arguments);
    var uniqueValues = [];

    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (!uniqueValues.includes(args[i][j]))
                uniqueValues.push(args[i][j]);
        }
    }
    return uniqueValues;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Solution
// [ 1, 3, 2, 5, 4 ]