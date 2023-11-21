const { valueSymbol } = require('piscina');

// Atomics
const buffer = new SharedArrayBuffer(8);
const view_uint8 = new Uint8Array(buffer);

((typedArray, index, value) => {
  const old = typedArray[index];
  typedArray[index] = old ^ value;
  return old;
})();
