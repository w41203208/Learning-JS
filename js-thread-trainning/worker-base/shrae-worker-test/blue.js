console.log('blue.js');
const worker = new SharedWorker('share-worker.js');
worker.port.onmessage = (e) => {
  console.log('EVENT', e.data);
};

window.addEventListener('beforeunload', () => {
  worker.port.postMessage('close');
});
