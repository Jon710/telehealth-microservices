import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthLedgerService {
  getHello(): string {
    return 'Hello World!';
  }
}
