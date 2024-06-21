console.log("hello")
let http = require("http");
let server = http.createServer(function func(req, res){
    let responseHeaders= {
        'Content-Type' : 'text/plain'
    }
    res.writeHead(200, responseHeaders);
    res.write("good response");
    res.end();

})
let port = 3122
server.listen(port, function(){
    console.log(`server is running on port ${port} ...`);
});