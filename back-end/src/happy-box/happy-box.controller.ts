import { Controller } from '@nestjs/common';
import { HappyBoxSerivce } from './happy-box.service';

@Controller('/happy_box')
export class HappyBoxController {
  constructor(private happyBoxSerivce: HappyBoxSerivce) {}
}
