// 緩衝區與視圖練習1
console.log("\n\n\n緩衝區與視圖練習1");
console.log("----------------------------------------");
const ab = new ArrayBuffer(8);
const view16 = new Uint16Array(ab);
const view8 = new Uint8Array(ab);
for (i = 0; i < 8; i++) view8[i] = i;
view8[0] = 1;
console.log(view8);
console.log(view16);

console.log(ab.byteLength);
console.log(ab.slice());
console.log(ab.slice(4, 6));
console.log(ab.slice(-3, -2));
console.log("----------------------------------------");
