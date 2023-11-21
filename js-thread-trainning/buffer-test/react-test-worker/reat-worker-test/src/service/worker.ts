// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (msg: any) => {
    console.log('in worker');
    const [num_begin, num_end] = msg.data;
    let sum = 0;
    for (let i = num_begin; i < num_end; i++) {
      sum += i;
    }
    postMessage(sum);
    // eslint-disable-next-line no-restricted-globals
    self.close();
  };
};
