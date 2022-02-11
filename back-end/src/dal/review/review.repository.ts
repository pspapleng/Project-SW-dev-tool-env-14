import { Repository } from 'typeorm';
import { ReviewEntity } from './review.entity';

export class ReviewRepository extends Repository<ReviewEntity> {}
