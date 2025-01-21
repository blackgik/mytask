import { expect } from 'chai';
import Calculator from '../src/calculator';
import sinon, { SinonMock, SinonSpy, SinonStub } from 'sinon';

describe('Mock Stub Spy', () => {
  let calc: Calculator;
  let sinoSpy: SinonSpy;
  let stub: SinonStub;
  let mock: SinonMock;

  before(() => {
    calc = new Calculator();
    mock = sinon.mock(calc);
  });

  after(() => {
    if (sinoSpy) sinoSpy.restore();
    if (stub) stub.restore();
    if (mock) mock.restore();
  });

  it('Adds Test suite', () => {
    // arrange
    sinoSpy = sinon.spy(calc, 'add');
    stub = sinon.stub(calc, 'getRandomValue').returns(2);

    let expectation = mock.expects('logMessage').exactly(1).withArgs('Logging add function');
    // act
    const result = calc.add(2, 3);
    // assert
    expect(result).to.be.equal(7);
    expect(sinoSpy.calledOnceWith(2, 3)).to.be.true;
    expectation.verify();
  });

  it('Subtract Test suite', () => {
    // arrange
    sinoSpy = sinon.spy(calc, 'subtract');

    let expectation = mock.expects('logMessage').exactly(1).withArgs('Logging subtract function');
    // act
    const result = calc.subtract(7, 3);
    // assert
    expect(result).to.be.equal(2);
    expect(sinoSpy.calledOnceWith(7, 3)).to.be.true;
    expectation.verify();
  });
});
