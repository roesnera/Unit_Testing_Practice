const { assert } = require("chai");
const calcs = require('../calc.js');
const Calc = calcs.Calc;

describe('Calc', () => {
    describe('.add', () => {
      it('returns the sum of two values', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1,2);
        assert.ok(answer===3);
      });
      it('logs an error with only one input and undefined memory', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1);
        assert.ok(answer===undefined);
      });
    });
  });