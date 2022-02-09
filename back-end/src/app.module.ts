import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { FavoriteEntity } from './dal/favorite/favorite.entity';
import { HappyBoxEntity } from './dal/happy-box/happy-box.entity';
import { ImageEntity } from './dal/image/image.entity';
import { ReviewEntity } from './dal/review/review.entity';
import { ServiceCenterEntity } from './dal/service-center/service-center.entity';
import { UserEntity } from './dal/user/user.entity';
import { FavoriteModule } from './favorite/favorite.module';
import { HappyBoxModule } from './happy-box/happy-box.module';
import { ImageModule } from './image/image.module';
import { ReviewModule } from './review/review.module';
import { ServiceCenterModule } from './service-center/service-center.module';
import { UserModule } from './user/user.module';

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

    UserModule,
    ServiceCenterModule,
    ReviewModule,
    HappyBoxModule,
    FavoriteModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
