const http = require("http");
const fs = require("fs");

const url = require("url");

const myServer = http.createServer((req, res) => {
//   console.log(req);
  const log = `${req.method} ${req.url} ${req.httpVersion} ${req.headers.host}  IP: ${req.socket.remoteAddress}\n`;
  const myUrl = url.parse(req.url , true);
  console.log(myUrl)
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
        case '/' : 
        res.end('<h1>Home Page</h1>');
        break;
        case '/about' : 
        const username = myUrl.query.myname 
        res.end(`<h1> Hi ${username}</h1>`);
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
