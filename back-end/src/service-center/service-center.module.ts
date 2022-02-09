import { Module } from '@nestjs/common';
import { ServiceCenterController } from './service-center.controller';
import { ServiceCenterSerivce } from './service-center.service';

@Module({
  imports: [],
  controllers: [ServiceCenterController],
  providers: [ServiceCenterSerivce],
})
export class ServiceCenterModule {}
