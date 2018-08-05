// Sorted Union
// Advanced Solution using es6 Part 1
// [1, 3, 2], [5, 2, 1, 4], [2, 1]

function uniteUnique() {
    // Make an array out of arguments and flatten it
    const args = [].concat(...arguments);
    // Create a set
    return [...new Set(args)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Solution
// [ 1, 3, 2, 5, 4 ]