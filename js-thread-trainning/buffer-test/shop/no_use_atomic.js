const {
  isMainThread,
  Worker,
  workerData,
  parentPort,
} = require('worker_threads');

const THREAD_NUMS = 2;

if (isMainThread) {
  // let commodity = 100;
  const buffer = new SharedArrayBuffer(12);
  const view_commodity = new Int32Array(buffer);
  let sum = 0;
  view_commodity[0] = 80000;
  for (let i = 1; i < THREAD_NUMS + 1; i++) {
    const worker = new Worker(__filename, { workerData: { i, buffer } });
    worker.on('message', (msg) => {
      if (msg.action === 'done') {
        console.log((sum += view_commodity[msg.number]));
      }
    });
  }
} else {
  const { i, buffer } = workerData;
  const view_sell = new Int32Array(buffer);
  while (view_sell[0] > 0) {
    if (Math.random() > 0.5) {
      view_sell[0] -= 1;
      view_sell[i] += 1;
    }
  }
  parentPort.postMessage({
    action: 'done',
    number: i,
  });
}
