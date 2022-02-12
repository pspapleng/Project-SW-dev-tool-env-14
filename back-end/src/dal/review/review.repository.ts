import { EntityRepository, Repository } from 'typeorm';
import { ReviewEntity } from './review.entity';

@EntityRepository(ReviewEntity)
export class ReviewRepository extends Repository<ReviewEntity> {
    async findByServiceCenterId(serviceCenterId: string): Promise<ReviewEntity[]> {
        return await this
            .find({
                where:     {
                    serviceCenter: serviceCenterId,
                },
                relations: ['user'],
            })
    }
}
