import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorater';
import { UserRole } from '@prisma/client';

@ApiTags('Books')
@ApiBearerAuth()
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN, UserRole.PETUGAS)
  @Post()
  @ApiOperation({ summary: 'Menambahkan buku (ADMIN only)' })
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Menampilkan seluruh data buku' })
  findAll() {
    return this.bookService.findAll();
  }

  @Get('search/:title')
  @ApiOperation({ summary: 'Mencari buku berdasarkan judul' })
  searchByTitle(@Param('title') title: string) {
    return this.bookService.findByTitle(title);
  }
  @Get('author/:author')
  @ApiOperation({ summary: 'Mencari buku berdasarkan penulis' })
  searchByAuthor(@Param('author') author: string) {
    return this.bookService.findByAuthor(author);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail buku berdasarkan ID' })
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Memperbarui data buku (ADMIN only)' })
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus buku (ADMIN only)' })
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
