const http = require('http');
const fs = require('fs');

var hostname = '127.0.0.1';
var port = 8081;

const server = http.createServer(function (request, result) {
    fs.readFile('./document_root/index.html', function(err,html) {
        result.writeHead(200, {'Content-Type': 'text/html'});
        result.write(html);
        result.end();
    });

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});