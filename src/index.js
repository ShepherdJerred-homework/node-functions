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
  let sumSquared = numbers.reduce((accumulator, number) => accumulator + number * 2);
  return Math.sqrt(sumSquared);
}

function replace(array, object) {
  
}

module.exports = {
  accumulator,
  makeAccumulator,
  distance,
  replace
};
