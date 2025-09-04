import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('test hello world test test test test please work new update please work');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
