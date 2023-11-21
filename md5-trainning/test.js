// const makeRangeIterator = ({ start = 0, end = Infinity, step = 1 }) => {
//   let nextIndex = start;
//   let iterationCount = 0;

//   return {
//     next: () => {},
//   };
// };
// let fibonacci = {
//   [Symbol.iterator]() {
//     let pre = 0,
//       cur = 1;
//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return { done: false, value: cur };
//       },
//     };
//   },
// };
// console.log(fibonacci);
// for (var n of fibonacci) {
//   // truncate the sequence at 1000
//   if (n > 1000) break;
//   console.log(n);
// }

// var arr = [1, 2, 3, 4];
// // let iterator = arr[Symbol.iterator]();
// for (var v of arr) {
//   console.log(v);
// }
const string = 'https://www.twitch.tv/';
console.log(rstr2binl(decodeURIComponent(encodeURIComponent(string))));
function rstr2binl(input) {
  var i;
  var output = [];
  output[(input.length >> 2) - 1] = undefined;
  for (i = 0; i < output.length; i += 1) {
    output[i] = 0;
  }
  var length8 = input.length * 8;
  for (i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
  }
  return output;
}
