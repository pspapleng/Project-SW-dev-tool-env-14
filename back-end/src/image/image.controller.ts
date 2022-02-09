import { Controller, Get, Param, Post } from '@nestjs/common';
import { ImageSerivce } from './image.service';

@Controller('/image')
export class ImageController {
  constructor(private imageSerivce: ImageSerivce) {}
@Post()
async uploadImage(){
  return 'uploadImage'
  }
@Get('/:id')
async getImageById(@Param('id') id: string) {
  return 'getImageById '+id    
  }
}
