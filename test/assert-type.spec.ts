import { assert, expect, should } from 'chai';

describe('ssert style', () => {
  it('EXPECT assertion style', () => {
    const name: string = 'Kumar';
    const age: number = 13;
    const objData: Object = { name: 'Kumar', age: 32 };
    const arrData: Array<number> = [1, 2, 3];
    const bool: boolean = true;

    expect(name).to.be.ok;
    expect(name).to.be.equal('Kumar');
    expect(name).to.be.a('string');

    expect(age).to.be.ok;
    expect(age).to.be.equal(13);
    expect(age).to.be.a('number');

    expect(objData).to.be.ok;
    expect(objData).to.be.a('object');
    expect(objData).to.have.property('name').equal('Kumar');
    expect(objData).to.have.property('age').equal(32);

    expect(arrData).to.be.ok;
    expect(arrData).to.be.a('array');
    expect(arrData).to.contain(2);
    expect(arrData).to.have.lengthOf(3).that.include(1);
    expect(arrData).to.have.lengthOf(3);

    expect(bool).to.be.ok;
    expect(bool).to.be.true;
    expect(bool).to.be.a('boolean');
  });

  it('SHOULD assertion style', () => {
    should();
    const name: string = 'Kumar';
    const age: number = 13;
    const objData: Object = { name: 'Kumar', age: 32 };
    const arrData: Array<number> = [1, 2, 3];
    const bool: boolean = true;

    name.should.be.ok;
    name.should.be.equal('Kumar');
    name.should.be.a('string');

    age.should.be.ok;
    age.should.be.equal(13);
    age.should.be.a('number');

    objData.should.be.ok;
    objData.should.be.a('object');
    objData.should.have.property('name').equal('Kumar');
    objData.should.have.property('age').equal(32);

    arrData.should.be.ok;
    arrData.should.be.a('array');
    arrData.should.contain(2);
    arrData.should.have.lengthOf(3).that.include(1);
    arrData.should.have.lengthOf(3);

    bool.should.be.ok;
    bool.should.be.true;
    bool.should.be.a('boolean');
  });

  it('ASSERT assertion style', () => {
    should();
    const name: string = 'Kumar';
    const age: number = 13;
    const objData: Object = { name: 'Kumar', age: 32 };
    const arrData: Array<number> = [1, 2, 3];
    const bool: boolean = true;

    assert.isOk(name);
    assert.equal(name, 'Kumar');
    assert.typeOf(name, 'string');

    assert.typeOf(objData, 'object');
    assert.deepEqual(objData, { name: 'Kumar', age: 32 });

    assert.deepEqual(arrData, [1, 2, 3]);
    assert.typeOf(arrData, 'array');
    assert.include(arrData, 3);

    assert.typeOf(bool, 'boolean');
    assert.equal(bool, true);
  });
});
