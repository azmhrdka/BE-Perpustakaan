import { Module } from '@nestjs/common';
import { PengembalianService } from './pengembalian.service';
import { PengembalianController } from './pengembalian.controller';

@Module({
  providers: [PengembalianService],
  controllers: [PengembalianController]
})
export class PengembalianModule {}
