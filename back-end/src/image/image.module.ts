import { ImageController } from './image.controller';
import { Module } from '@nestjs/common';
import { ImageSerivce } from './image.service';

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [ImageSerivce],
})
export class ImageModule {}
