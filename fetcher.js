const fs = require('fs');
const request = require('request');

const urlContent = process.argv.slice(2, 3)[0];
const localFilePath = process.argv.slice(3)[0];

request(urlContent, (error, response,  body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    fs.writeFile(localFilePath, body, (error) => {
      if (error) {
        console.error('Error:', error);
      } else {
        fs.stat(localFilePath, (error, stats) => {
          if (error) {
            console.error('Error:', error);
          } else {
            console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`);
          }
        });
      }
    });
  }
});


