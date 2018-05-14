const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Magic happens on port ${port}`);
});
