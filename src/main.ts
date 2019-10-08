import { NestFactory } from '@nestjs/core';
import { getModule } from './apps/bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(getModule());
  await app.listen(3000);
}
bootstrap();
