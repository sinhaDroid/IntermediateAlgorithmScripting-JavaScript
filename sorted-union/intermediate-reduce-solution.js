// Sorted Union
// Intermediate Solution
// [1, 3, 2], [5, 2, 1, 4], [2, 1]

function uniteUnique() {
    // Creates an empty array to store our final result.
    var newArr = [];

    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    
    //Use reduce function to flatten the array
    newArr = args.reduce(function(arrA,arrB) {
        //Apply filter to remove the duplicate elements in the array
        return arrA.concat(arrB.filter(function(i) {
            return arrA.indexOf(i) === -1;
        }));
    });

    return newArr;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// Solution
// [ 1, 3, 2, 5, 4 ]