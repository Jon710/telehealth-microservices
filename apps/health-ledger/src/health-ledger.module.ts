import { Module } from '@nestjs/common';
import { HealthLedgerController } from './health-ledger.controller';
import { HealthLedgerService } from './health-ledger.service';

@Module({
  imports: [],
  controllers: [HealthLedgerController],
  providers: [HealthLedgerService],
})
export class HealthLedgerModule {}
