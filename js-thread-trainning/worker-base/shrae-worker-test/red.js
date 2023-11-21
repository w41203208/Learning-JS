console.log('red.js');
const worker = new SharedWorker('share-worker.js', { name: 'test' });
const buffer = new SharedArrayBuffer(4);
console.log(buffer);
worker.port.onmessage = (e) => {
  console.log('EVENT', e.data);
};

window.addEventListener('beforeunload', () => {
  worker.port.postMessage('close');
});
