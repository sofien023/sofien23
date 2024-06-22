http = require('http');

server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("good luck")
    res.end('Hello World\n');
});

server.listen(8080, function() {
    console.log('Server running at http://127.0.0.1:8080/')});