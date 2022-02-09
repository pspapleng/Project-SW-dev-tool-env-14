import { Module } from '@nestjs/common';
import { HappyBoxController } from './happy-box.controller';
import { HappyBoxSerivce } from './happy-box.service';

@Module({
  imports: [],
  controllers: [HappyBoxController],
  providers: [HappyBoxSerivce],
})
export class HappyBoxModule {}
