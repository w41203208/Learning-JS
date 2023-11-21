const applyCountings = (...countings) => {
  return (createCalculator) => (reducer) => {
    const calculator = createCalculator(reducer);
    const chain = countings.map((c) => c(calculator));
    const calculate = compose(...chain)(calculator.calculate);
    return {
      ...calculator,
      calculate,
    };
  };
};

function createCalculator(reducer, enhancer) {
  if (typeof enhancer !== 'undefined') {
    return enhancer(createCalculator)(reducer);
  }
  let currentValue = 1;
  let currentReducer = reducer;

  function calculate(value) {
    currentValue = currentReducer(currentValue, value);
    return value;
  }
  const calculator = {
    calculate,
  };
  return calculator;
}
function compose(...funcs) {
  return funcs.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    };
  });
}

const countAdd1 = (calculator) => (calculate) => {
  return function (value) {
    value = value + 1;
    console.log(value);
    calculate(value);
  };
};
const countAdd2 = (calculator) => (calculate) => {
  return function (value) {
    value = value + 2;
    console.log(value);
    calculate(value);
  };
};
// const countAdd3 = (calculator) => (calculate) => {
//   return function (value) {
//     value = value + 3;
//     console.log(value);
//     calculate(value);
//   };
// };
// const countAdd53 = (calculator) => (calculate) => {
//   return function (value) {
//     value = value + 53;
//     console.log(value);
//     calculate(value);
//   };
// };
const reducer = (currentValue, value) => {
  console.log(currentValue + value);
};

const enhancer = applyCountings(countAdd1, countAdd2);
const calculator = createCalculator(reducer, enhancer);
calculator.calculate(1);

const a = (callback) => {
  return (value) => {
    // ...code
    value = value + 1;
    callback(value);
  };
};
// 這裡假設b是最後一個
const b = (callback) => {
  return (value) => {
    // ...code
    value = value + 2;
    callback(value);
  };
};

const print = (value) => {
  console.log(value);
};

const test = a(b(print));
test(1);
