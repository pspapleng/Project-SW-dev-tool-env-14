import { EntityRepository, Repository } from 'typeorm';
import { ServiceCenterEntity } from './service-center.entity';

@EntityRepository(ServiceCenterEntity)
export class ServiceCenterRepository extends Repository<ServiceCenterEntity> {
  findWithSearch(searchQuery: string) {
    let queryBuilder = this.createQueryBuilder().select();
    // check searchQuery before build final query
    if (searchQuery) {
      queryBuilder = queryBuilder
        .where('name ILIKE :searchQuery', { searchQuery: `%${searchQuery}%` })
        .orWhere('province ILIKE :searchQuery', {
          searchQuery: `%${searchQuery}%`,
        });
    }
    return queryBuilder.getMany();
  }
}
