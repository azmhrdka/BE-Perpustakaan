import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePeminjamanDto } from './dto/create-peminjaman.dto';
import { updatePeminjamanDto } from './dto/update-peminjaman.dto';

@Injectable()
export class PeminjamanService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePeminjamanDto) {
    try {
      return await this.prisma.peminjaman.create({
        data: {
          studentId: dto.studentId,
          bookId: dto.bookId,
          status: 'BORROWED',
          borrowDate: new Date(),
        },
      });
    } catch (error) {
      console.error('PRISMA ERROR:', error);
      throw error;
    }
  }
  async returnBook(id: number) {
  const peminjaman = await this.prisma.peminjaman.findUnique({
    where: { id },
  });

  if (!peminjaman) {
    throw new BadRequestException('Data peminjaman tidak ditemukan');
  }

  if (peminjaman.status === 'RETURNED') {
    throw new BadRequestException('Buku sudah dikembalikan');
  }

  return this.prisma.peminjaman.update({
    where: { id },
    data: {
      status: 'RETURNED',
      returnDate: new Date(),
    },
  });
}

  async findAll() {
    return this.prisma.peminjaman.findMany();
  }

  async findOne(id: number) {
    return this.prisma.peminjaman.findUnique({
      where: { id },
    });
  }
  async findByDate(date: string) {
  const targetDate = new Date(`${date}T00:00:00`);
  const nextDate = new Date(`${date}T23:59:59`);

  const peminjaman = await this.prisma.peminjaman.findMany({
    where: {
      borrowDate: {
        gte: targetDate,
        lte: nextDate,
      },
    },
  });

  return peminjaman;
}
}
