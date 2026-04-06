import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) { }
  async create(dto: CreateBookDto) {
    return this.prisma.book.create({ data: dto });
  }
  async findAll() {
    return this.prisma.book.findMany({ orderBy: { id: 'asc' } });
  }
  async findByTitle(title: string) {
    const book = await this.prisma.book.findFirst({ where: { title } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }
  async findByAuthor(author: string) {
    const book = await this.prisma.book.findFirst({ where: { author } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }
  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }
  async update(id: number, dto: UpdateBookDto) {
    await this.findOne(id);
    return this.prisma.book.update({
      where: { id },
      data: dto,
    });
  }
  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.book.delete({ where: { id } });
    return { message: `Book with id ${id} deleted` };
  }
}