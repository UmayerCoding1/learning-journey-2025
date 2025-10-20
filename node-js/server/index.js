const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
//   console.log(req);
  const log = `${req.method} ${req.url} ${req.httpVersion} ${req.headers.host}  IP: ${req.socket.remoteAddress}\n`;

  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
        case '/' : 
        res.end('<h1>Home Page</h1>');
        break;
        case '/about' : 
        res.end('<h1>About Page</h1>');
        break;
        case '/contact' : 
        res.end('<h1>Contact Page</h1>');
        break;
        default : 
        res.end('<h1>404 Page</h1>');
        break;
    }
  });
});

myServer.listen(5000, () => {
  console.log("Listening on port 3000");
});
