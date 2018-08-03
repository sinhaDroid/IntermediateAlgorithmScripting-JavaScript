// Pig Latin
// Advanced Solution Part 2
// "consonant"

function translatePigLatin(str) {
    return str
        .replace(/^([aeiouy])(.*)/, '$1$2way')
        .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}

console.log(translatePigLatin("consonant"));

// Solution
// onsonantcay