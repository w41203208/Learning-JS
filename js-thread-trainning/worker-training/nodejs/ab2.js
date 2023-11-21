// 緩衝區與視圖練習2
console.log("\n\n\n緩衝區與視圖練習2");
console.log("----------------------------------------");
const buffer = new ArrayBuffer(16);
console.log(buffer); // original buffer <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

const view64 = new Float64Array(buffer);
view64[0] = 1.1234567890123456789; // '1.1234567890123456789'
console.log(buffer);
console.log(view64[0]);

const view32 = new Float32Array(buffer);
view32[2] = 1.1234567890123456789;
console.log(view32[2]);

const view8 = new Uint8Array(buffer);
view8[12] = 32;
console.log(view8[12]);

console.log(buffer); // changed buffer <66 6f 74 d3 ad f9 f1 3f 6f cd 8f 3f 00 00 00 00>
// 以上可得知view 會修改 buffer 的記憶體區塊，而且不同 TypeArray 可以修改同一個 Buffer
// Buffer 與 view 的關係 Buffer 要是 view 的倍數
console.log("----------------------------------------");
