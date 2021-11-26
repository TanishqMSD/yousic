var http = require('http');

http.createServer(function (req, res) {
        res.write('Yooooooooooooooo am ONLINE !')
        res.end();
}).listen(8080);
