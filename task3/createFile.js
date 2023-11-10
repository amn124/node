const fs = require('fs');

// Content to be written to the file
const content = 'Hello Node';

// Create the "welcome.txt" file with the given content
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error creating the file: ' + err);
  } else {
    console.log('File "welcome.txt" created with content: ' + content);
  }
});
