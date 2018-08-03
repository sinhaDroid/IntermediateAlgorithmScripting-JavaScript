// Convert HTML Entities
// Basic Solution
// &, <, >, "(double quote), '(apostrophe)

function convertHTML(str) {
  // Split by character to avoid problems
  var temp = str.split('');

  // Since we are only checking for few HTML elements I used a switch statement
  for (let index = 0; index < temp.length; index++) {
    switch (temp[index]) {
      case '<':
        temp[index] = '&lt;';
        break;
      case '>':
        temp[index] = '&gt;';
        break;
      case '&':
        temp[index] = '&amp;';
        break;
      case '"':
        temp[index] = '&quot;';
        break;
      case "'":
        temp[index] = "&apos;"
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

console.log(convertHTML(' "Dolce & Gabbana" '));

// Solution
// &quot;Dolce &amp; Gabbana&quot;
