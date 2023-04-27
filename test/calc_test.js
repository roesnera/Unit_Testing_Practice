// const { assert } = require("chai");
// const assert = require('assert');
// const calcs = require('../calc.js');
// const Calc = calcs.Calc;
import { assert } from "chai";
import Calc from "../calc.js";


describe('Calc', () => {
    describe('.add', () => {
      it('returns the sum of two values', () => {
        // Your test goes here
        const calc = new Calc();
        const answer = calc.add(1,2);
        assert.strictEqual(answer, 3);
      });
    });
  });