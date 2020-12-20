const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log("Listenning on port 5000")
  let text = fs.readFileSync('blog.txt','utf8')
  res.write(text);
  res.end();
}).listen(5000);