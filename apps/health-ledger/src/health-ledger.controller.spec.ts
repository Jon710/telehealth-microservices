import { Test, TestingModule } from '@nestjs/testing';
import { HealthLedgerController } from './health-ledger.controller';
import { HealthLedgerService } from './health-ledger.service';

describe('HealthLedgerController', () => {
  let healthLedgerController: HealthLedgerService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthLedgerController],
      providers: [HealthLedgerService],
    }).compile();

    healthLedgerController = app.get<HealthLedgerService>(
      HealthLedgerController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(healthLedgerController.getHello()).toBe('Hello World!');
    });
  });
});
