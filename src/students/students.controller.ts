import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorater'; 
import { UserRole } from '@prisma/client'; 

@ApiTags('students')
@ApiBearerAuth()
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN,) 
  @ApiOperation({ summary: 'Menambahkan siswa baru' })
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Menampilkan seluruh data siswa' })
  findAll() {
    return this.studentsService.findAll(); // ✅ Bebas akses
  }

  @Get('nis/:nis')
  @ApiOperation({ summary: 'Mencari siswa berdasarkan NIS' })
  findByNis(@Param('nis') nis: string) {
    return this.studentsService.findByNis(nis); // ✅ Bebas akses
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Mencari siswa berdasarkan nama' })
  findByName(@Param('name') name: string) {
    return this.studentsService.findByName(name); // ✅ Bebas akses
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail siswa berdasarkan ID' })
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(Number(id)); // ✅ Bebas akses
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard) // ✅ Tambah guard
  @Roles(UserRole.ADMIN, UserRole.PETUGAS) // ✅ ADMIN & PETUGAS bisa update
  @ApiOperation({ summary: 'Memperbarui data siswa' })
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    return this.studentsService.update(Number(id), dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard) // ✅ Tambah guard
  @Roles(UserRole.ADMIN) // ✅ Hanya ADMIN yang bisa hapus
  @ApiOperation({ summary: 'Menghapus siswa' })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(Number(id));
  }
}