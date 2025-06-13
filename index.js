const http = require('http');
const { validateHhLink } = require('./helpers');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/validate')) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const link = url.searchParams.get('url') || '';
    const result = validateHhLink(link);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
