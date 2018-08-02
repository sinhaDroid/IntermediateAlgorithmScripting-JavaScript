// Wherefore Art Thou
// Advanced Solution Part 1
/*
1st Argument
[{first: "Romeo", last: "Montague"},
{first: "Mercutio", last: null},
{first: "Tybalt", last: "Capulet"}]

2nd Argument
{last: "Capulet"}
*/

function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {
        return srcKeys.map(function (key) {
            return obj.hasOwnProperty(key) && obj[key] === source[key];
        }).reduce(function (a, b) {
            return a && b;
        });
    });
}

console.log(whatIsInAName([{
        first: "Romeo",
        last: "Montague"
    },
    {
        first: "Mercutio",
        last: null
    },
    {
        first: "Tybalt",
        last: "Capulet"
    }
], {
    last: "Capulet"
}));

// Solution
// [ { first: 'Tybalt', last: 'Capulet' } ]