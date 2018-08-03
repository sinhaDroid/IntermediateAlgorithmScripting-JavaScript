// Pig Latin
// Basic Solution
// "consonant"

function translatePigLatin(str) {
    // Create variables to be used
    var pigLating = '';
    var regex = /[aeiou]/gi;

    // Check if the first character is a vowel
    if (str[0].match(regex))
        pigLating = str + 'way';
    else {
        // Find how many consonants before the first vowel
        var vowelIndice = str.indexOf(str.match(regex)[0]);

        // Take the string from the first vowel to the last char
        // then add the consonants that were previously omitted and add the ending.
        pigLating = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
    }

    return pigLating;
}

console.log(translatePigLatin("consonant"));

// Solution
// onsonantcay