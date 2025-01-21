import { expect } from 'chai';
import Calculator from '../src/calculator';

describe.only('API TEST SUITE', () => {
  it('should get users info', async () => {
    const calc = new Calculator();
    const res = await calc.getUser();

    expect(res.status).to.be.equal(200);
    expect(res.data.id).to.be.equal(1);
  });

  it('should save user info', async () => {
    const calc = new Calculator();

    const userPayload = {
      name: 'Brian Cors',
      username: 'Black',
      email: 'brian@yopmail.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    };
    const res = await calc.saveUser(userPayload);

    expect(res.status).to.be.equal(201);
    expect(res.data.id).to.be.equal(11);
  });
});
