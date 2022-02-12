import { Injectable } from '@nestjs/common';
import { getDistance } from 'geolib';
import { ServiceCenterRepository } from './../dal/service-center/service-cennter.repository';

@Injectable()
export class ServiceCenterSerivce {
  constructor(
    private readonly serviceCenterRepository: ServiceCenterRepository,
  ) {}

  async getServiceCenterByLocation(lat: number, lon: number): Promise<any> {
    const serviceCenters = await this.serviceCenterRepository.find(); // find all service center
    const result = serviceCenters
      .map((serviceCenter) => {
        let distance = 0;
        if (+serviceCenter.latitude > 0 && +serviceCenter.longitude > 0) {
          distance = getDistance(
            { latitude: lat, longitude: lon },
            {
              latitude: serviceCenter.latitude,
              longitude: serviceCenter.longitude,
            },
          );
        }
        return {
          ...serviceCenter,
          latitude: +serviceCenter.latitude,
          longitude: +serviceCenter.longitude,
          distance,
        };
      }) // calculate distance of each service center
      .filter((serviceCenter) => serviceCenter.distance < 30 * 1000) // filter service center nearme
      .sort((a, b) => a.distance - b.distance); // sort by distance desc
    return result;
  }
}
