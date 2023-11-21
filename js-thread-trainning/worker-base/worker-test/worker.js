console.log('in worker in');
self.onmessage = (msg) => {
  console.log('in worker');
  console.log(self.toString());
  const [num_begin, num_end] = msg.data;
  let sum = 0;
  for (let i = num_begin; i < num_end; i++) {
    sum += i;
  }
  postMessage(sum);
  self.close();
};
