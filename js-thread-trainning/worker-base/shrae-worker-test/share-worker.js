const ID = Math.floor(Math.random() * 999999);
console.log('shared-worker.js', ID);

const ports = new Set();
let num = 0;
self.onconnect = (e) => {
  const port = e.ports[0];
  ports.add(port);
  console.log('CONN', ID, ports.size);

  port.onmessage = (e) => {
    if (e.data === 'close') {
      ports.delete(port);
      console.log('CLOSE', ports.size);
      return;
    }
    num += e.data;

    for (let p of ports) {
      p.postMessage([ID, num]);
    }
  };
};
