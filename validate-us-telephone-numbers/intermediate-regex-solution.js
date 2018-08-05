// Validate US Telephone Numbers
// Intermediate Solution
// "555-555-5555" pr 800-692-7753 or 800-six427676;laskdjf

function telephoneCheck(str) {
    var regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
    return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("800-692-7753"));
console.log(telephoneCheck("800-six427676;laskdjf"));

// Solution
// true
// true
// false