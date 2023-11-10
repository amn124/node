const fs = require('fs');

// Read the content from "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file: ' + err);
  } else {
    console.log('Content of "welcome.txt": ' + data);
  }
});
