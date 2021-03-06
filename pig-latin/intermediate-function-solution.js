// Pig Latin
// Basic Solution
// "consonant"

function translatePigLatin(str) {
    function check(obj) {
        return ['a', 'i', 'u', 'u', 'e', 'o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
    }

    return str.substr(check(0))
        .concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

console.log(translatePigLatin("consonant"));

// Solution
// onsonantcay