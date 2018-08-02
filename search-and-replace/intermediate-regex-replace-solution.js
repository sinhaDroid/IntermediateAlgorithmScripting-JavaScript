// Search and Replace
// Intermediate Solution
// ("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function myReplace(str, before, after) {
    // Create a regular expression
    var regex = new RegExp(before, "gi");
    // Check whether first letter is uppercase or not
    if (/A-Z/.test(before[0])) {
        // Change the after word to be capitalized before we use it.
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    // Now replace the original str with the edited one.
    str = str.replace(regex, after);

    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// Solution
// A quick brown fox leaped over the lazy dog