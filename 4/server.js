const http = require('http');
const fs = require('fs');

const readAndSendFile = (uri,res) => {
    fs.readFile(uri+'.html',(err, data) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}

http.createServer((req, res) => {
    const uri = req.url;
    switch(uri){
        case '/':
            readAndSendFile('index',res)
            break;
        case '/about':
            readAndSendFile('about',res)
            break;
        default:
            readAndSendFile('404',res)
    }
}).listen(5000);