import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  const config = new DocumentBuilder()
    .setTitle('Library API')
    .setDescription('Backend API Sistem Perpustakaan')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // ✅ Tambahkan ini — pasang gembok ke SEMUA endpoint
  for (const path of Object.values(document.paths)) {
    for (const operation of Object.values(path) as any[]) {
      if (operation?.responses) {
        operation.security = [{ bearer: [] }];
      }
    }
  }

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();