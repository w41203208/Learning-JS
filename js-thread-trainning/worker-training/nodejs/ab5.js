// 緩衝區與試圖練習 5
// MessagePack
console.log("\n\n\n緩衝區與視圖練習5 - 安全的使用字串編碼API:UTF-8");
console.log("----------------------------------------");
const enc = new TextEncoder();
const test = enc.encode(JSON.stringify({ a: "1", c: "2" }));
const test1 = enc.encode("€");
console.log(test);
console.log(test1);

const buffer_5 = new ArrayBuffer(30);
const view_5 = new Uint8Array(buffer_5);
view_5.forEach((v, index) => {
  view_5[index] = test[index];
});
const dec = new TextDecoder();
console.log(buffer_5);
console.log(dec.decode(view_5));

console.log("----------------------------------------");

// JS 位元練習
console.log("\n\n\nJS 位元練習");
console.log("----------------------------------------");
const a = true;
const b = ~(a << 3); //二補數 反轉+1 正是因為使用2補數來當負數 所以範圍的定義才會視 255 ~ -256這樣
console.log(a);
console.log(b);
console.log("----------------------------------------");
