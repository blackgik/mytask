import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';
class Calculator {
  add(a: number, b: number) {
    this.logMessage('Logging add function');
    const random = this.getRandomValue();
    return a + b + random;
  }

  subtract(a: number, b: number) {
    this.logMessage('Logging subtract function');
    return a - b - this.getRandomValue();
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  divide(a: number, b: number) {
    if (b === 0) {
      throw new Error('Number not divisible by zero');
    }
    return a / b;
  }

  getRandomValue(): number {
    return Math.floor(Math.random() * 10 + 1);
  }

  logMessage(message: string) {
    console.log(message);
  }

  asyncFunctionPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(4);
      }, 1000);
    });
  }

  async getUser() {
    return await axios.get(`${baseUrl}/users/1`);
  }

  async saveUser(data: object) {
    return await axios.post(`${baseUrl}/users`, data);
  }
}

export default Calculator;
