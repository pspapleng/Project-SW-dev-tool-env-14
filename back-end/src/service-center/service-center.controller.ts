import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServiceCenterSerivce } from './service-center.service';

@Controller('/service_center')
export class ServiceCenterController {
  constructor(private serviceCenterSerivce: ServiceCenterSerivce) {}

@Get()
async getAllServiceCenter(
  @Query('search') search: string)
  {
  return 'getAllServiceCenter '+search  
  }

@Get('/location')
async getServiceCenterByLocation(
@Query('lat') lat: number, @Query('lon') lon: number) {
    return ('get ServiceCenter By Location lat : '+lat+' lon : '+lon)
  }

@Get('/:id')
async getServiceCenterById(@Param('id') id: string) {
  return 'get serviceCenter by id '+id    
  }


}
