import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerTwo } from './logger-two/logger-two.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(loggerTwo);
  await app.listen(3000);
}
bootstrap();
