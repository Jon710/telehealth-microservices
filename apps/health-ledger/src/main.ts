import { NestFactory } from '@nestjs/core';
import { HealthLedgerServiceModule } from './health-ledger.module';

async function bootstrap() {
  const app = await NestFactory.create(HealthLedgerServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
