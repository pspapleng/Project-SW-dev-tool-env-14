import { Controller, Get, Post } from '@nestjs/common';
import { HappyBoxSerivce } from './happy-box.service';

@Controller('/happy_box')
export class HappyBoxController {
  constructor(private happyBoxSerivce: HappyBoxSerivce) {}
@Get()
async getHappyBox() {
  return 'getHappyBox'    
  }
@Post()
async createHappyBox() {
  return 'createHappyBox'    
  }
}
