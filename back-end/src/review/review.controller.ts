import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReviewSerivce } from './review.service';

@Controller('/review')
export class ReviewController {
  constructor(private reviewSerivce: ReviewSerivce) {}
  @Post()
  async createReview() {
    return 'create review'    
    }
  @Get('/:id')
  async getReviewByServiceCenterId(@Param('id') id: string) {
  return 'getReviewByServiceCenterId '+id    
  }
  @Patch('/:id')
  async updateReviewById(@Param('id') id: string) {
    return 'updateReviewById '+id    
    }
  @Delete('/:id')
  async deleteReviewById(@Param('id') id: string) {
    return 'deleteReviewById '+id    
    }
}
