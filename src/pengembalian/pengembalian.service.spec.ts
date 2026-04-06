import { Test, TestingModule } from '@nestjs/testing';
import { PengembalianService } from './pengembalian.service';

describe('PengembalianService', () => {
  let service: PengembalianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PengembalianService],
    }).compile();

    service = module.get<PengembalianService>(PengembalianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
