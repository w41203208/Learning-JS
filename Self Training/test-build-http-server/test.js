const RouterMethods = [
  'connect',
  'delete',
  'get',
  'head',
  'options',
  'post',
  'put',
  'trace',
];

function test() {
  const aa = {};

  aa.add = (num) => {
    num = num + 1;
    return aa;
  };
  for (const method of RouterMethods) {
    aa[method] = (a) => aa.add(a);
  }
  return aa;
}

const test1 = test();
test1.get(1).get(1);
console.log(test1);
// function copy<T>(args: T): void {
//   console.log(args);
// };
// copy<string>('test');
