const main = require('../src/index');
const should = require('should');

describe('accumulator', function () {
  it('should add correctly', function () {
    should(main.accumulator()).be.equal(0);
    should(main.accumulator(10)).be.equal(10);
    should(main.accumulator(25)).be.equal(35);
    should(main.accumulator(40)).be.equal(75);
    should(main.accumulator()).be.equal(75);
  });
});

describe('makeAccumulator', function () {
  it('should add correctly', function () {
    let a1 = main.makeAccumulator(0);
    should(a1()).be.equal(0);
    should(a1(10)).be.equal(10);
    should(a1(25)).be.equal(35);
    should(a1()).be.equal(35);

    let a2 = main.makeAccumulator(100);
    should(a2(10)).be.equal(110);
    should(a2(25)).be.equal(135);

    should(a1()).be.equal(35);
  });
});

describe('distance', function () {
  it('should calculate distance correctly', function () {
    should(main.distance([ 3, 6, 2 ])).be.equal(49);
  });
});

describe('replace', function () {
  it('should calculate replace correctly', function () {
    should(main.replace([ "fee", "fie", "foe", "fum" ], { fie: "x", foe: "y" })).be.eql([ 'fee', 'x', 'y', 'foe' ]);
    should(main.replace([ "a", "c", "f", "a", "e", "b" ], { a: 3, b: 7, c: 9 })).be.eql([ 3, 9, 'f', 3, 'e', 7 ]);
  });
});

