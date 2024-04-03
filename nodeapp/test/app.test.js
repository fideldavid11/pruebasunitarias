const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with hello world', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, world!');
  });
});
