const { parentPort } = require('worker_threads');

parentPort.on('message', (msg) => {
  console.log('in worker');
  const [num_begin, num_end] = msg.data;
  let sum = 0;
  for (let i = num_begin; i < num_end; i++) {
    sum += i;
  }
  postMessage(sum);
});
