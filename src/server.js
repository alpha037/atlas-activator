const http = require('http');
const https = require('https');
const auth = require('./auth');

const PORT = process.env.PORT || 3000;

const server = http.createServer(async function (req, res) {
  if (auth.authenticateRequest(req)) {
    res.setHeader('Content-type', 'text/html');
    res.writeHead(401);
    res.write('<h2>401 Unauthorized.</h2>');
    return res.end();
  }

  if (auth.authenticateUserAgent(req)) {
    res.setHeader('Content-type', 'text/html');
    res.writeHead(403);
    res.write('<h2>403 Access Denied.</h2>');
    return res.end();
  }

  // res.setHeader('Content-type', 'application/octet-stream');
  // res.setHeader('Content-disposition', 'attachment; filename=activation.txt');

  res.setHeader('Content-type', 'text/plain');
  res.writeHead(200);

  res.write('data');
  res.end();
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
