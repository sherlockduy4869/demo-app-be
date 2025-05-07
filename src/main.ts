import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const port = 3001;

  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT ?? 3001);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
