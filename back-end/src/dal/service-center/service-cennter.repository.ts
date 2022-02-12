import { EntityRepository, Repository } from 'typeorm';
import { ServiceCenterEntity } from './service-center.entity';

@EntityRepository(ServiceCenterEntity)
export class ServiceCenterRepository extends Repository<ServiceCenterEntity> {}
