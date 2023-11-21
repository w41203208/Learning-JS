console.log('start');
const now = Date.now();

const worker = new Worker('./worker.js');

worker.onmessage = (e) => {
  const data = e.data;
  console.log(data);
};

setTimeout(() => {
  console.log('hi');
  console.log(Date.now() - now);
}, 1000);
worker.postMessage([200000000000]);
