// Validate US Telephone Numbers
// Basic Solution
// "555-555-5555" pr 800-692-7753 or 800-six427676;laskdjf

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("800-692-7753"));
console.log(telephoneCheck("800-six427676;laskdjf"));

// Solution
// true
// true
// false