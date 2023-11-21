const applyCountings =
  (...countings) =>
  (value) => {
    const calculate = (value) => value;
    const chain = countings.map((c) => c(calculate));
    const answerPrint = compose(...chain);

    return answerPrint(value);
  };

const createCalculator = (enhancer) => {
  function answerPrint(value) {
    if (typeof enhancer !== 'undefined') {
      return enhancer(value);
    }
    return value;
  }

  return {
    answerPrint,
  };
};

function compose(...funcs) {
  return funcs.reduce((a, b) => (...args) => {
    return a(b(...args));
  });
}

const countAdd1 = (calculate) => {
  return function (value) {
    value = value + 1;
    return calculate(value);
  };
};
const countAdd2 = (calculate) => {
  return function (value) {
    value = value + 2;
    return calculate(value);
  };
};
const enhancer = applyCountings(countAdd1, countAdd2);
const calculator = createCalculator(enhancer);
console.log(calculator.answerPrint(1));

const array1 = [1, 2, 3, 4];

const a = () => {
  console.log('testa');
};
const b = () => {
  console.log('testb');
};
const cb = () => {
  console.log('testcb');
};

const arr = [a, b, cb];

const c = arr.reduce((a, b) => {
  return (...args) => {
    return a(b(...args));
  };
});

// 1. number1 = () => b(cb())
// 2. () => a(number1())
