import { Injectable } from '@nestjs/common';
import { ReviewEntity } from './../dal/review/review.entity';
import { ReviewRepository } from './../dal/review/review.repository';


@Injectable()
export class ReviewSerivce {
    constructor(
        private readonly reviewRepository: ReviewRepository,
      ) {}

    async getReviewByServiceCenterId(serviceId: string): Promise<ReviewEntity[]> {
        const reviews = await this.reviewRepository.findByServiceCenterId(serviceId);
        return reviews;
    }
    

}
