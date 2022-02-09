import { Controller } from '@nestjs/common';
import { ServiceCenterSerivce } from './service-center.service';

@Controller('/service_center')
export class ServiceCenterController {
  constructor(private serviceCenterSerivce: ServiceCenterSerivce) {}
}
