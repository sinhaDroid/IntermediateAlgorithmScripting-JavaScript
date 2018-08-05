// Smallest Common Multiple
// Basic Solution
// 1 and 5, 3, 4

function smallestCommons(arr) {
    // Sort array from greater to lowest
    arr.sort(function (a, b) {
        return b - a;
    });

    // Create new array and add all values from greater to smaller from the original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        newArr.push(i);
    }

    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;

    // run code while n is not the same as the array lenght.
    do {
        quot = newArr[0] * loop * newArr[1];
        for (n = 2; n < newArr.length; n++) {
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++;
    } while (n !== newArr.length);

    return quot;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([1, 4]));
console.log(smallestCommons([1, 3]));

// Solution
// 60
// 12
// 6