// Convert HTML Entities
// Intermediate Solution
// &, <, >, "(double quote), '(apostrophe)

function convertHTML(str) {
  // Chaining of replace method with different arguments
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return str;
}

console.log(convertHTML(' "Dolce & Gabbana" '));

// Solution
// &quot;Dolce &amp; Gabbana&quot;