import { ReviewRepository } from './../dal/review/review.repository';
import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReviewSerivce } from './review.service';

describe('ReviewService', () => {
  let reviewSerivce: ReviewSerivce;
  let findByServiceCenterId: jest.Mock;

  beforeAll(async () => {
    findByServiceCenterId = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewSerivce,
        {
          provide: getRepositoryToken(ReviewRepository),
          useValue: {
            findByServiceCenterId,
          },
        },
      ],
    }).compile();
    reviewSerivce = await module.get(ReviewSerivce);
  });

  describe('call getReviewByServiceCenterId method', () => {
    describe('with matched service_center id', () => {
      let serviceId = '';
      let reviews = [];
      beforeEach(() => {
        serviceId = '9a4f225a-62d7-49df-a33a-fd6e0997ab38';
        reviews = [
          {
            id: faker.datatype.uuid(),
            serviceCenter: serviceId,
          },
        ];
        findByServiceCenterId.mockReturnValue(Promise.resolve(reviews));
      });
      it('should return array of review', async () => {
        const fetchedData = await reviewSerivce.getReviewByServiceCenterId(
          serviceId,
        );
        fetchedData.forEach((e) => {
          expect(typeof e).toBe('object');
          expect(e.serviceCenter).toEqual(serviceId);
        });
      });
    });
  });
});