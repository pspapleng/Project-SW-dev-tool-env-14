import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://159.223.45.216:4141/',
    },
  });
  await app.listen(3000);
}
bootstrap();
