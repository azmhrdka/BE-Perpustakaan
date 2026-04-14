import { Controller } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'; // ← tambah
import { UseGuards } from '@nestjs/common'; // ← tambah
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // ← tambah

@ApiTags('pengembalian')
@ApiBearerAuth()         // ← tambah
@UseGuards(JwtAuthGuard) // ← tambah
@Controller('pengembalian')
export class PengembalianController {}