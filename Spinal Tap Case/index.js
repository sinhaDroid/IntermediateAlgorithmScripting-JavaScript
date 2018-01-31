function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    // Split on whitespace and underscores and join with dash
    return str.toLowerCase().split(/(?:_| )+/).join('-');
  }

  spinalCase('This is spinal case string');
