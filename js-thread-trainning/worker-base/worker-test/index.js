const display = document.querySelector('#display');
const btnClose = document.querySelector('#close');
const btnRun = document.querySelector('#run');
btnClose.addEventListener('click', (e) => {
  console.log('main thread close worker');
  worker.terminate();
});

btnRun.addEventListener('click', (e) => {
  const worker = new Worker('./worker.js');
  worker.onmessage = (msg) => {
    // doComeplete();
    const data = msg.data;
    display.innerHTML = data;
  };
  console.log(worker);
  worker.postMessage([0, 2000000000]);
  console.log('run start');
  doSomething();
});

const doSomething = () => {
  console.log('before for');
  for (var j = 0; j < 20000000; j++) {}
  console.log('after for');
};
const doComeplete = () => {
  for (var j = 0; j < 2000000000; j++) {}
};
