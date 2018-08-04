// Arguments Optional
// Basic Solution
// 2, 3

function addTogether() {
    var args = new Array(arguments.length);
    // Storing the arguments into array
    for (let index = 0; index < arguments.length; index++) {
        args[index] = arguments[index]
    }
    // Check for the arguments length\
    if (args.length == 2) {
        // If there are two arguments, check for the type of both arguments
        // Use typeof to check the type of the argument
        if (typeof (args[0]) !== 'number' || typeof (args[1]) !== 'number') {
            return undefined;
        }
        return args[0] + args[1];
    }
    // When only 1 arguments is provided
    if (args.length == 1) {
        var a = arguments[0];

        // Check the argument
        if (typeof (a) !== 'number') {
            return undefined;
        } else {
            // Making use of closures
            return function (b) {
                // Checking the second argument
                if (typeof (b) !== 'number') {
                    return undefined;
                } else {
                    return a + b;
                }
            }
        }
    }

}

console.log(addTogether(2, 3));

// Solution
// 5