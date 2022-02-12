import { Module } from '@nestjs/common';
import { FavoriteController } from './favorite.controller';
import { FavoriteSerivce } from './favorite.service';

@Module({
  imports: [],
  controllers: [FavoriteController],
  providers: [FavoriteSerivce],
})
export class FavoriteModule {}
