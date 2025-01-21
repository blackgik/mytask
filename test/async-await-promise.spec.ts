import { assert, expect } from 'chai';
import Calculator from '../src/calculator';

describe('ASYNC AWAIT PROMISE TEST SUITE', () => {
  it('should work with async test suite', async () => {
    // arrage
    const calc = new Calculator();
    // act
    const result = await calc.asyncFunctionPromise();
    // assert
    expect(result).to.be.equal(4);
  });

  it('should work with promise test suite', () => {
    // arrage
    const calc = new Calculator();
    // act
    calc.asyncFunctionPromise().then((result) => {
      expect(result).to.be.equal(4);
    });
    // assert
  });
});
