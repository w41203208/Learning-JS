// 緩衝區與試圖練習 4
console.log("\n\n\n緩衝區與視圖練習4 - 字串表示");
console.log("----------------------------------------");
function stringToArrayBuffer(str) {
  const buffer = new ArrayBuffer(str.length);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i);
  }
  console.log(buffer);
  return view;
}
console.log(stringToArrayBuffer("foo1"));
console.log(stringToArrayBuffer("€"));
console.log("----------------------------------------");
