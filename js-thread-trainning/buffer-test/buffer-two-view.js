const buffer = new SharedArrayBuffer(8);
console.log(buffer);
const view8 = new Uint8Array(buffer);
const view16 = new Uint16Array(buffer);
view8[0] = 255;
console.log(buffer);
view8[0] = 257;
console.log(buffer);
console.log('----------------------------\n');
const buffer_1 = new SharedArrayBuffer(8);
const view8_1 = new Uint8Array(buffer_1);
const view16_1 = new Uint16Array(buffer_1);
view16_1[2] = 255;
console.log(view8_1);
console.log(view16_1);
view16_1[2] = 256;
// view8_1[4] = 256;
// 可以看出在16位元設定256，從8位元view中看到的會試往後移一位
// 從較大範圍的view去看小範圍的view就可以知道記憶體的儲存室已little-endian來儲存
console.log(view8_1);
console.log(view16_1);

// cores = require('os').cpus().length;
// console.log(cores);
