import { config } from './config.e2e';
import * as supertest from 'supertest';

describe('Suggest Service Center Feature', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  describe('Run GetServiceCenterBySearch', () => {
    it('should return correct service center', async () => {
      // GET /service_center/search?search=
      const { body: searchServices } = await supertest(config.baseURL)
        .get(`/service_center/search`)
        .query({
          search: 'กรุงเทพมหานคร',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      searchServices.forEach((e) => {
        expect(typeof e).toBe('object');
      });
      expect(searchServices.length).toBeGreaterThan(0);

      // GET /service_center/search
      const { body: allServices } = await supertest(config.baseURL)
        .get(`/service_center/search`)
        .query({
          search: '',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      allServices.forEach((e) => {
        expect(typeof e).toBe('object');
      });
      expect(allServices.length).toBeGreaterThan(0);
    });
  });
});
