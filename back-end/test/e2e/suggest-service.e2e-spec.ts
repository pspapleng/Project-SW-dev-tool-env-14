import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as supertest from 'supertest';
import { configService } from '../../src/config/config.service';
import { GlobalModule } from '../../src/global.module';
import { ServiceCenterModule } from '../../src/service-center/service-center.module';
import { ReviewModule } from './../../src/review/review.module';
import { UserModule } from './../../src/user/user.module';

describe('Suggest Service Center Feature', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
        ServiceCenterModule,
        ReviewModule,
        UserModule,
        GlobalModule,
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  beforeEach(() => {
    jest.setTimeout(10000);
  });

  afterAll(async () => {
    await app.close();
  });

  //it kmitl coordinate 13.7749,100.5197
  describe('Run GetServiceCenterByLocation and GetServiceCenterById and GetReviewByServiceCenter', () => {
    it('should return correct service center', async () => {
      // GET /service_center/location
      const { body: services } = await supertest(app.getHttpServer())
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
      const { body: service } = await supertest(app.getHttpServer())
        .get(`/service_center/${id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
      expect(typeof service).toBe('object');
      expect(service.id).toBe(id);

      // GET /review/:serviceId'
      const serviceId = service.id;
      const { body: reviews } = await supertest(app.getHttpServer())
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