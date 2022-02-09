import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewSerivce } from './review.service';

@Module({
  imports: [],
  controllers: [ReviewController],
  providers: [ReviewSerivce],
})
export class ReviewModule {}
