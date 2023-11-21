// function curriedFunction(num){
//   return function(callback){

//     callback(num*2)
//   }
// }
// const curriedFunction = ( num ) => callback => {
//   callback(num*2)
// }

// const test = curriedFunction(2)
// const test1 = curriedFunction(3)

// test(function(result1){
//   test1(function(result2){
//     console.log(result1 + result2)
//   })
// })

// const map = (arr, callback) => {
//   for (i in arr) {
//     arr[i] = callback(arr[i]);
//   }
//   return arr;
// };

// console.log(map([1, 2, 3, 4], (x) => x * 2));
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout1');
  new Promise(function (resolve) {
    console.log('test11111');
    resolve();
  });
}, 0);

setTimeout(function () {
  console.log('setTimeout2');
  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    console.log('then1');
    setTimeout(() => {
      new Promise(function (resolve) {
        console.log('promise3333');
        resolve();
      }).then(() => {
        console.log('test');
      });
      console.log('in then settimeout');
    }, 300);
  });
  new Promise(function (resolve) {
    console.log('Promise1');
    resolve();
  }).then(function () {
    console.log('then2');
  });
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise2');
  resolve();
}).then(function () {
  console.log('then3');
});

console.log('script end');
