import { Post, Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorater';
import { UserRole } from '@prisma/client';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger'; // ← update

@ApiTags('peminjaman')
@ApiBearerAuth()         // ← tambah
@UseGuards(JwtAuthGuard) // ← tambah (global untuk semua route)
@Controller('peminjaman')
export class PeminjamanController {
  constructor(private readonly peminjamanService: PeminjamanService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.PETUGAS)
  @ApiOperation({ summary: 'Membuat peminjaman baru (ADMIN, PETUGAS only)' })
  create(@Body() createPeminjamanDto: CreatePeminjamanDto) {
    return this.peminjamanService.create(createPeminjamanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Menampilkan seluruh data peminjaman' })
  findAll() {
    return this.peminjamanService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail peminjaman berdasarkan ID' })
  findOne(@Param('id') id: number) {
    return this.peminjamanService.findOne(id);
  }

  @Get('date/:date')
  @ApiOperation({ summary: 'Mencari peminjaman berdasarkan tanggal' })
  findByDate(@Param('date') date: string) {
    return this.peminjamanService.findByDate(date);
  }

  @Patch(':id/return')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.PETUGAS)
  @ApiOperation({ summary: 'Mengembalikan buku (ADMIN, PETUGAS only)' })
  returnBook(@Param('id') id: string) {
    return this.peminjamanService.returnBook(+id);
  }
}