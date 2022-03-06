import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as supertest from 'supertest';
import { configService } from '../../src/config/config.service';
import { GlobalModule } from '../../src/global.module';
import { ServiceCenterModule } from '../../src/service-center/service-center.module';
import { mockServiceCenter } from '../service-center.mock';
import { ReviewRepository } from './../../src/dal/review/review.repository';
import { ServiceCenterRepository } from './../../src/dal/service-center/service-cennter.repository';
import { UserRepository } from './../../src/dal/user/user.repository';
import { ReviewModule } from './../../src/review/review.module';
import { UserModule } from './../../src/user/user.module';
import { mockReview } from './../review.mock';
import { mockUser } from './../user.mock';

describe('Service Center REST API', () => {
  let app: INestApplication;
  let serviceCenterRepository: ServiceCenterRepository;
  let reviewRepository: ReviewRepository;
  let userRepository: UserRepository;

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

    serviceCenterRepository = module.get<ServiceCenterRepository>(
      ServiceCenterRepository,
    );
    reviewRepository = module.get<ReviewRepository>(ReviewRepository);
    userRepository = module.get<UserRepository>(UserRepository);

    const allService = await serviceCenterRepository.find();
    await serviceCenterRepository.remove(allService);
    const allReview = await reviewRepository.find();
    await reviewRepository.remove(allReview);
    app = module.createNestApplication();
    await app.init();
  });

  beforeEach(() => {
    jest.setTimeout(10000);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Run GetServiceCenterByLocation and GetServiceCenterById and GetReviewByServiceCenter with Mock Data', () => {
    it('should return correct service center and correct review', async () => {
      // Pre-populate the DB with some dummy service center
      const newServiceCenters = [];
      for (let i = 0; i < mockServiceCenter.length; i++) {
        const newServiceCenter = serviceCenterRepository.create(
          mockServiceCenter[i],
        );
        newServiceCenters.push(newServiceCenter);
      }
      const serviceCenters = await serviceCenterRepository.save(
        newServiceCenters,
      );

      // GET /service_center/location
      const { body: services } = await supertest(app.getHttpServer())
        .get(`/service_center/location?lat=1.0868&lon=0.4517`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      services.forEach((e) => {
        expect(typeof e).toBe('object');
        expect(e.id).toBe(serviceCenters[2].id);
        expect(e.distance).toBeLessThan(30 * 1000);
      });
      expect(services.length).toBe(1);

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
      const newUser = userRepository.create(mockUser[0]);
      const user = await userRepository.save(newUser);

      const newReview = reviewRepository.create();
      newReview.user = user;
      newReview.serviceCenter = service;
      newReview.content = mockReview[0].content;
      const review = await reviewRepository.save(newReview);

      const { body: reviews } = await supertest(app.getHttpServer())
        .get(`/review/${serviceId}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      reviews.forEach((e) => {
        expect(typeof e).toBe('object');
        expect(e.id).toBe(review.id);
        expect(e.user.id).toBe(user.id);
      });
      expect(reviews.length).toBe(1);
    });
  });
});