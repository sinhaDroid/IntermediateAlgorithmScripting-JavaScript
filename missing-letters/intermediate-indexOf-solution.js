// Missing Letters
// Intermediate Solution Part 2
// abce

function fearNotLetter(str) {
    var result;
    var alpha = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < str.length; i++) {

        if (str[0] !== 'a') {
            result = undefined;
        } else if (str[i].indexOf(alpha[i]) < 0) {
            result = alpha[i];
            break;
        }
    }

    return result;
}

console.log(fearNotLetter("abce"));

// Solution
// d