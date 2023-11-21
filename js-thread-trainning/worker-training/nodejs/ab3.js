// 緩衝區與視圖練習3
console.log("\n\n\n緩衝區與視圖練習3 - 儲存 True or False in Buffer");
console.log("----------------------------------------");
const buffer_1 = new ArrayBuffer(1);
console.log(buffer_1);
const view_test = new Uint8Array(buffer_1);
function setBool(slot, value) {
  view_test[0] = view_test[0] | ((value | 0) << slot);
}
function getBool(slot) {
  console.log(view_test[0] & (1 << slot));
  return !((view_test[0] & (1 << slot)) === 0);
}
setBool(0, true);
setBool(2, true);
setBool(1, false);

a = getBool(2);
console.log(a);
console.log(view_test);
console.log("----------------------------------------");
