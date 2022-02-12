import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { FavoriteModule } from './favorite/favorite.module';
import { GlobalModule } from './global.module';
import { HappyBoxModule } from './happy-box/happy-box.module';
import { ReviewModule } from './review/review.module';
import { ServiceCenterModule } from './service-center/service-center.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    GlobalModule,
    UserModule,
    ServiceCenterModule,
    ReviewModule,
    HappyBoxModule,
    FavoriteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
