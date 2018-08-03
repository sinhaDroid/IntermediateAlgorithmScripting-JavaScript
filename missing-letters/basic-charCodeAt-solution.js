// Missing Letters
// Basic Solution
// abce

function fearNotLetter(str) {
    for (let index = 0; index < str.length; index++) {
        // Code of current character
        var code = str.charCodeAt(index);
        // If code of current character is not equal to first character + no of iteration
        // hence character has been escaped
        if (code !== str.charCodeAt(0) + index) {
            // If current character has escaped one character find previous char and return
            return String.fromCharCode(code - 1);
        }
    }

    return undefined;
}

console.log(fearNotLetter("abce"));

// Solution
// d