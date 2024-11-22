import { Controller, Get } from '@nestjs/common';
import { HealthLedgerService } from './health-ledger.service';

@Controller()
export class HealthLedgerController {
  constructor(private readonly healthLedgerService: HealthLedgerService) {}

  @Get()
  getHello(): string {
    return this.healthLedgerService.getHello();
  }
}
