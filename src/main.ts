<<<<<<< HEAD
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 
import { ValidationPipe } from '@nestjs/common'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe()); 
 
  const config = new DocumentBuilder() 
    .setTitle('Library API') 
    .setDescription('Backend API Sistem Perpustakaan') 
    .setVersion('1.0') 
    .addBearerAuth() 
    .build(); 
 
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
=======
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 
import { ValidationPipe } from '@nestjs/common'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe()); 
 
  const config = new DocumentBuilder() 
    .setTitle('Library API') 
    .setDescription('Backend API Sistem Perpustakaan') 
    .setVersion('1.0') 
    .addBearerAuth() 
    .build(); 
 
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
