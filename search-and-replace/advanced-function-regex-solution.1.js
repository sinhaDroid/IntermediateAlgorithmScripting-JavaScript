// Search and Replace
// Advanced Solution
// ("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

function myReplace(str, before, after) {
    // Create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {

        // Split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");

        // Iterate through all the items of sourceArr and targetArr array untill loops hits the end
        for (let index = 0; index < Math.min(targetArr.length, sourceArr.length); index++) {

            // Find out the casing of every letter from sourceArr using regular expression
            // If sourceArr[index] is uppercase then convert targetArr[i] to uppercase
            if (/A-Z/.test(sourceArr[index])) {
                targetArr[index] = targetArr[index].toUpperCase();
            } else {
                // If sourceArr[index] is not uppercase then convert targetArr[index] to lowercase
                targetArr[index] = targetArr[index].toLowerCase();
            }
            // Join modified targetArr to string and return
            return (targetArr.join(""));
        }
    }
    // Replace "before" with "after" with "before" - casing
    return str.replace(before, applyCasing(before, after));
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// Solution
// A quick brown fox leaped over the lazy dog