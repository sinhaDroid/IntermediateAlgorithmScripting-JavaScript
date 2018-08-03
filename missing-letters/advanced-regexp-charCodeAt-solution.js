// Missing Letters
// Advanced Solution
// abce

function fearNotLetter(str) {
    var allChars = '';
    var notChars = new RegExp('[^' + str + ']', 'g');

    for (let index = 0; allChars[allChars.length - 1] !== str[str.length - 1]; index++) {
        allChars += String.fromCharCode(str[0].charCodeAt(0) + index);
    }

    return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

console.log(fearNotLetter("abce"));

// Solution
// d