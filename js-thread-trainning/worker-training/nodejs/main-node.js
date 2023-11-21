#! /usr/bin/env node

const { Worker } = new require('worker_threads');
// const worker = new Worker(__dirname + '/worker-node.js');

const run = () => {
  const worker = new Worker(__dirname + '/worker-node.js');
  worker.postMessage([0, 2000000000]);
  console.log('run start');
  doSomething();
  worker.onmessage = (msg) => {
    // doComeplete();
    const data = msg.data;
    display.innerHTML = data;
  };
};

const doSomething = () => {
  console.log('before for');
  for (var j = 0; j < 20000000; j++) {}
  console.log('after for');
};
const doComeplete = () => {
  for (var j = 0; j < 2000000000; j++) {}
};

run();
