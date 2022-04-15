import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServiceCenterSerivce } from './service-center.service';

@Controller('/service_center')
export class ServiceCenterController {
  constructor(private serviceCenterSerivce: ServiceCenterSerivce) {}

  @Get()
  async getAllServiceCenter() {
    return this.serviceCenterSerivce.getAllServiceCenter()
  }
  @Get('/search')
  async getServiceCenterBySearch(@Query('search') search: any){
    return this.serviceCenterSerivce.getServiceCenterBySearch(search)
  }

  @Get('/location')
  async getServiceCenterByLocation(
    @Query('lat') lat: number,
    @Query('lon') lon: number,
  ) {
    return this.serviceCenterSerivce.getServiceCenterByLocation(lat, lon);
  }

  @Get('/:id')
  async getServiceCenterById(@Param('id') id: string) {
    return this.serviceCenterSerivce.getServiceCenterById(id);   
  }
}
