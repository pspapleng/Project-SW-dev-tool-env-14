import { config } from './config.e2e';
import * as supertest from 'supertest';

describe('Suggest Service Center Feature', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  //it kmitl coordinate 13.7749,100.5197
  describe('Run GetServiceCenterByLocation and GetServiceCenterById and GetReviewByServiceCenter', () => {
    it('should return correct service center and correct review', async () => {
      // GET /service_center/location
      const { body: services } = await supertest(config.baseURL)
        .get(`/service_center/location?lat=13.7749&lon=100.5197`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      services.forEach((e) => {
        expect(typeof e).toBe('object');
        expect(e.distance).toBeLessThan(30 * 1000);
      });
      expect(services.length).toBeGreaterThan(0); // always include online service

      // GET /service_center/:id'
      const id = services[Math.floor(Math.random() * services.length)].id;
      const { body: service } = await supertest(config.baseURL)
        .get(`/service_center/${id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      expect(typeof service).toBe('object');
      expect(service.id).toBe(id);

      // GET /review/:serviceId'
      const serviceId = service.id;
      const { body: reviews } = await supertest(config.baseURL)
        .get(`/review/${serviceId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      reviews.forEach((e) => {
        expect(typeof e).toBe('object');
      });
      expect(reviews.length).toBeGreaterThanOrEqual(0);
    });
  });
});
