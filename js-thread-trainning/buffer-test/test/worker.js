self.onmessage = (msg) => {
  const [num] = msg.data;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  postMessage(sum);
};
