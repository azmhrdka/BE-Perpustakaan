<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
  providers: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}
=======
import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
  providers: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
