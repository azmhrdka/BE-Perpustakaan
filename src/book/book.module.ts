<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
=======
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
