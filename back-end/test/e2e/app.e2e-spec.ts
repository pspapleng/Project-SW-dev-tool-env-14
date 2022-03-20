import { config } from './config.e2e';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    request(config.baseURL).get('/').expect(200).expect('Hello World!');
  });
});
