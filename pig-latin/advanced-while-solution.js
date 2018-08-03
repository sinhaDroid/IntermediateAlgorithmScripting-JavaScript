// Pig Latin
// Advanced Solution Part 1
// "consonant"

function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // Check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }
    // Return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if(!isConsonant(str.charAt(0)))
    return str + "way";
    else
    strArr = str.split("");

    // Push all consonants to the end of the array
    while(isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
    // Convert array to string and concatenate "ay" at the end
    return strArr.join("") + "ay";
}

console.log(translatePigLatin("consonant"));

// Solution
// onsonantcay