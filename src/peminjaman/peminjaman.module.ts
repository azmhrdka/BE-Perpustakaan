import { Module } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { PeminjamanController } from './peminjaman.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PeminjamanService, PrismaService],
  controllers: [PeminjamanController]
})
export class PeminjamanModule {}
