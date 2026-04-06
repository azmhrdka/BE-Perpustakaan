import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiOperation({ summary: 'Menambahkan siswa baru' })
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Menampilkan seluruh data siswa' })  
  findAll() {
    return this.studentsService.findAll();
  }

  @Get('nis/:nis')
  @ApiOperation({ summary: 'Mencari siswa berdasarkan NIS' })
  findByNis(@Param('nis') nis: string) {
    return this.studentsService.findByNis(nis);
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Mencari siswa berdasarkan nama' })
  findByName(@Param('name') name: string) {
    return this.studentsService.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail siswa berdasarkan ID' })
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Memperbarui data siswa' })
  update(@Param('id') id: string, @Body() dto: UpdateStudentDto) {
    return this.studentsService.update(Number(id), dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus siswa' })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(Number(id));
  }
}
