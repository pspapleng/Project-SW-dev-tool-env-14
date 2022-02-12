import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteRepository } from './dal/favorite/favorite.repository';
import { HappyBoxRepository } from './dal/happy-box/happy-box.repository';
import { ReviewRepository } from './dal/review/review.repository';
import { ServiceCenterRepository } from './dal/service-center/service-cennter.repository';
import { UserRepository } from './dal/user/user.repository';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      ReviewRepository,
      FavoriteRepository,
      HappyBoxRepository,
      ServiceCenterRepository,
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class GlobalModule {}
