// Convert HTML Entities
// Advanced Solution
// &, <, >, "(double quote), '(apostrophe)

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  var htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function (entity) {
    return htmlEntities[entity] || entity;
  }).join('');
}

console.log(convertHTML(' "Dolce & Gabbana" '));

// Solution
// &quot;Dolce &amp; Gabbana&quot;