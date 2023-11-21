// self.onmessage = ({ data: buffer }) => {
//   buffer.foo = 42;
//   const view = new Uint8Array(buffer);

//   view[0] = 2;
//   console.log('updated in worker');
// };

self.onmessage = ({ data: { buffer, name } }) => {
  postMessage('ready');
  const view = new Int32Array(buffer);
  console.log(`Worker ${name} started!`);
  const result = Atomics.wait(view, 0, 0, 1000);
  console.log(`Worker ${name} awokren with ${result}`);
};
