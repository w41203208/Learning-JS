const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');

if (isMainThread) {
  const { port1, port2 } = new MessageChannel();
  const worker = new Worker(__filename, {
    workerData: {
      port: port2,
    },
    transferList: [port2],
  });
  port1.on('message', (msg) => {
    console.log(msg);
    port1.postMessage(msg);
  });
} else {
  const { port } = workerData;
  port.on('message', (msg) => {
    console.log('We got a message from the main thread:', msg);
  });
  port.postMessage('Hello, world!');
}
