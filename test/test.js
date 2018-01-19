const main = require('../src/index');
const should = require('should');

describe('accumulator', function () {
  it('should accumulate correctly', function () {
    should(main.accumulator()).be.equal(0);
    should(main.accumulator(10)).be.equal(10);
    should(main.accumulator(25)).be.equal(35);
    should(main.accumulator(40)).be.equal(75);
    should(main.accumulator()).be.equal(75);
  });
  it('should work with zero as input', function () {
    should(main.accumulator(0)).be.equal(75);
  });
  it('should work with negative input', function () {
    should(main.accumulator(-5)).be.equal(70);
  });
});

describe('makeAccumulator', function () {
  it('should add correctly', function () {
    let a1 = main.makeAccumulator(0);
    should(a1()).be.equal(0);
    should(a1(10)).be.equal(10);
    should(a1(25)).be.equal(35);
    should(a1()).be.equal(35);
  });
  it('should not conflict with multiple accumulators', function () {
    let a1 = main.makeAccumulator(0);
    should(a1()).be.equal(0);
    should(a1(10)).be.equal(10);
    should(a1(25)).be.equal(35);
    should(a1()).be.equal(35);

    let a2 = main.makeAccumulator(100);
    should(a2(10)).be.equal(110);
    should(a2(25)).be.equal(135);

    should(a1()).be.equal(35);
  })
});

describe('distance', function () {
  it('should calculate distance correctly', function () {
    should(main.distance([ 3, 6, 2 ])).be.equal(7);
  });
  it('should return zero with zero as input', function () {
    should(main.distance([ 0, 0, 0 ])).be.equal(0);
  });
});

describe('replace', function () {
  it('should replace correctly', function () {
    should(main.replace([ "fee", "fie", "foe", "fum" ], { fie: "x", foe: "y" })).be.eql([ 'fee', 'x', 'y', 'fum' ]);
    should(main.replace([ "a", "c", "f", "a", "e", "b" ], { a: 3, b: 7, c: 9 })).be.eql([ 3, 9, 'f', 3, 'e', 7 ]);
  });
  it('should work if object is empty', function () {
    should(main.replace([ "a", "c", "f", "a", "e", "b" ], {})).be.eql([ 'a', 'c', 'f', 'a', 'e', 'b' ]);
  });
  it('should work if array is empty', function () {
    should(main.replace([], { a: 3, b: 7, c: 9 })).be.eql([]);
  })
});

