import { HappyBoxEntity } from './dal/happy-box/happy-box.entity';
import { FavoriteEntity } from './dal/favorite/favorite.entity';
import { ServiceCenterEntity } from './dal/service-center/service-center.entity';
import { UserEntity } from './dal/user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.server';
import { ReviewEntity } from './dal/review/review.entity';
import { ImageEntity } from './dal/image/image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([
      UserEntity,
      ServiceCenterEntity,
      ReviewEntity,
      FavoriteEntity,
      HappyBoxEntity,
      ImageEntity,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
