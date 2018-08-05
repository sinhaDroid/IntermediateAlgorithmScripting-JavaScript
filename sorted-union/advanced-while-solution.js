// Sorted Union
// Advanced Solution
// [1, 3, 2], [5, 2, 1, 4], [2, 1]

function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
        concatArr = concatArr.concat(arguments[i]);
        i++;
    }
    var uniqueArray = concatArr.filter(function (item, pos) {
        return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Solution
// [ 1, 3, 2, 5, 4 ]