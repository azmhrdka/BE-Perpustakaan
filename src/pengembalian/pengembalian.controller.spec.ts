import { Test, TestingModule } from '@nestjs/testing';
import { PengembalianController } from './pengembalian.controller';

describe('PengembalianController', () => {
  let controller: PengembalianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PengembalianController],
    }).compile();

    controller = module.get<PengembalianController>(PengembalianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
