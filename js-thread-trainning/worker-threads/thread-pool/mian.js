const http = require('http');
const RpcWorkerPool = require('./rpc-worker');
const worker = new RpcWorkerPool('./worker.js', Number(3), 'leastbusy');

const server = http.createServer(async (req, res) => {
  const value = Math.floor(Math.random() * 100_000_000);
  const sum = await worker.exec('square_sum', value);
  res.end(JSON.stringify({ sum, value }));
});

server.listen(1337, (err) => {
  if (err) throw err;
  console.log('http://localhost:1337/');
});
