import { ServiceCenterEntity } from '../dal/service-center/service-center.entity';
import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ServiceCenterRepository } from '../dal/service-center/service-cennter.repository';
import { ServiceCenterSerivce } from './service-center.service';
import { BadRequestException } from '@nestjs/common';

describe('ServiceCenterService', () => {
  let serviceCenterSerivce: ServiceCenterSerivce;
  let find: jest.Mock;
  let findOne: jest.Mock;

  beforeAll(async () => {
    find = jest.fn();
    findOne = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiceCenterSerivce,
        {
          provide: getRepositoryToken(ServiceCenterRepository),
          useValue: {
            find,
            findOne,
          },
        },
      ],
    }).compile();
    serviceCenterSerivce = await module.get(ServiceCenterSerivce);
  });

  describe('call getServiceCenterByLocation method', () => {
    describe('with expected param', () => {
      let userLocations = [];
      beforeEach(() => {
        userLocations = [
          { latitude: '1.0568', longitude: '0.8517' }, // distance > 30 km, 44645 m
          { latitude: '1.3500', longitude: '0.5096' }, // distance = 30 km, 30000 m
          { latitude: '0.8648', longitude: '0.3942' }, // distance < 30 km, 25528 m
        ];
        find.mockReturnValue(Promise.resolve(userLocations));
      });
      it('should return array of service center which distance < 30 km', async () => {
        const fetchedData =
          await serviceCenterSerivce.getServiceCenterByLocation(1.0868, 0.4517);
        fetchedData.forEach((e) => {
          expect(typeof e).toBe('object');
          expect(e.distance).toBeLessThan(30 * 1000);
        });
        expect(fetchedData.length).toBe(1);
      });
    });
  });

  describe('call getServiceCenterById method', () => {
    describe('with matched id', () => {
      let id = '';
      let serviceCenterEntity: ServiceCenterEntity;
      beforeEach(() => {
        id = faker.datatype.uuid();
        serviceCenterEntity = new ServiceCenterEntity();
        serviceCenterEntity.id = id;
        findOne.mockReturnValue(Promise.resolve(serviceCenterEntity));
      });
      it('should return array of service center which matched id', async () => {
        const fetchedData = await serviceCenterSerivce.getServiceCenterById(id);
        expect(fetchedData).toEqual(serviceCenterEntity);
        expect(fetchedData.id).toEqual(id);
      });
    });
    describe('with unmatched id', () => {
      let id = '';
      beforeEach(() => {
        id = faker.datatype.uuid();
        findOne.mockReturnValue(Promise.resolve(undefined));
      });
      it('should return service_not_found', async () => {
        await expect(
          serviceCenterSerivce.getServiceCenterById(id),
        ).rejects.toThrowError(new BadRequestException('service_not_found'));
      });
    });
  });

  describe('call getServiceCenterBySearch method', () => {
    describe('with matched', () => {
      let search = 'กรุงเทพมหานคร';
      it('should return array of service center which matched', async () => {
        const fetchedData = await serviceCenterSerivce.getServiceCenterBySearch(search);
        fetchedData.forEach((e) => {
          expect(typeof e).toBe('object');
          expect(e.province).toEqual(search);
        });
      });
    });
  });
});