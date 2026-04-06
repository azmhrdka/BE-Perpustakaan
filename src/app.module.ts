<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';
import { PeminjamanModule } from './peminjaman/peminjaman.module';
import { PengembalianModule } from './pengembalian/pengembalian.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, StudentsModule, BookModule, PeminjamanModule, PengembalianModule, AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
    }),
  ],
})
export class AppModule {}
=======
import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';
import { PeminjamanModule } from './peminjaman/peminjaman.module';
import { PengembalianModule } from './pengembalian/pengembalian.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, StudentsModule, BookModule, PeminjamanModule, PengembalianModule, AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
    }),
  ],
})
export class AppModule {}
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
