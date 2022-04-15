import { BadRequestException, Injectable } from '@nestjs/common';
import { getDistance } from 'geolib';
import { ServiceCenterEntity } from 'src/dal/service-center/service-center.entity';
import { ServiceCenterRepository } from './../dal/service-center/service-cennter.repository';
import { getRepository } from "typeorm";

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
  async getServiceCenterById(id: string): Promise<ServiceCenterEntity> {
    const service = await this.serviceCenterRepository.findOne(id).catch( (error) => {throw new BadRequestException(error.message)}) ;
    if (!service){
         throw new BadRequestException("service_not_found");
    }
    return service;
  }
  async getAllServiceCenter(): Promise<any> {
    const serviceCenters = await this.serviceCenterRepository.find();
    return serviceCenters
  }
  // async getServiceCenterBySearch(search: string): Promise<any>{
  //   const serviceCenters = await this.serviceCenterRepository.find();
  //   const result = serviceCenters.map((serviceCenter) => {
  //     if(serviceCenter.name.toLowerCase().includes(search) || serviceCenter.province.includes(search)){
  //       return serviceCenter
  //     }
  //     else{
  //       return null
  //     }
  //   })
  //   return result
  // }
  async getServiceCenterBySearch(search: any): Promise<any>{
    const {searchQuery}  = search;
    const repository = getRepository(ServiceCenterEntity)

    return repository.createQueryBuilder().select()
    .where('name ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('description ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('imageUrl ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('type ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('address ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('province ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('website ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('facebook ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('phone ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('email ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('office_hours ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('cost ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('latitude ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('longitude ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .orWhere('review ILIKE:searchQuery', {searchQuery: `%${searchQuery}%`})
    .getMany();
}
}
