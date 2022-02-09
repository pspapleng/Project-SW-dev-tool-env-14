import { Controller } from '@nestjs/common';
import { ReviewSerivce } from './review.service';

@Controller('/review')
export class ReviewController {
  constructor(private reviewSerivce: ReviewSerivce) {}
}
