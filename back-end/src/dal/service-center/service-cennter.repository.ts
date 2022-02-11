import { Repository } from 'typeorm';
import { ServiceCenterEntity } from './service-center.entity';

export class ServiceCenterRepository extends Repository<ServiceCenterEntity> {}
