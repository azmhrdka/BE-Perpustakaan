import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  findUnique(args: { where: { nis: string; }; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateStudentDto) {
    return this.prisma.student.create({ data: dto });
  }

  async findAll() {
    return this.prisma.student.findMany({ orderBy: { id: 'desc' } });
  }

  async findByNis(nis: string) {
    const student = await this.prisma.student.findUnique({ where: { nis } });
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async findByName(name: string) {
    const student = await this.prisma.student.findFirst({ where: { name } });
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({ where: { id } });
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  async update(id: number, dto: UpdateStudentDto) {
    // pastikan ada dulu
    await this.findOne(id);
    return this.prisma.student.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    // pastikan ada dulu
    await this.findOne(id);
    return this.prisma.student.delete({ where: { id } });
  }
}
