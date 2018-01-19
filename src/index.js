let counter = 0;

function accumulator(numberToAdd = 0) {
  counter += numberToAdd;
  return counter;
}

function makeAccumulator(initialValue) {
  function accumulator(numberToAdd = 0) {
    initialValue += numberToAdd;
    return initialValue;
  }
  return accumulator;
}

function distance(numbers) {
  let sumOfSquaredNumbers = numbers.reduce((accumulator, number) => {
    console.log("NUM: " + number);
    console.log("ACC: " + accumulator);
    return accumulator + (number * number);
  });
  console.log(sumOfSquaredNumbers);
  return Math.sqrt(sumOfSquaredNumbers);
}

function replace(array, object) {
  return array.map(e => {
    if (e in object) {
      return object[e];
    } else {
      return e;
    }
  });
}

module.exports = {
  accumulator,
  makeAccumulator,
  distance,
  replace
};
