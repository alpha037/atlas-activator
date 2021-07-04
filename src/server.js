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

  const options = {
    host: process.env.HOST,
    path: `/gists/${process.env.GIST_ID}`,
    method: 'GET',
    headers: { 'user-agent': 'node.js' },
  };

  https
    .get(options, (response) => {
      let data = '';

      response.on('data', (chunk) => (data += chunk));

      response.on('end', () => {
        const payload = JSON.parse(data).files['Activator.txt'].content;

        res.setHeader('Content-type', 'text/plain');
        res.writeHead(200);
        res.write(payload);
        res.end();
      });
    })
    .on('error', (err) => {
      res.setHeader('Content-type', 'text/html');
      res.writeHead(500);
      res.write('<h2>500 Internal Server Error.</h2>');
      res.end();
    });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
