import { Injectable, UnauthorizedException } from '@nestjs/common'; 
import { PrismaService } from '../prisma/prisma.service'; 
import { JwtService } from '@nestjs/jwt'; 
import * as bcrypt from 'bcrypt'; 
import { RegisterDto } from './dto/register.dto';
 
@Injectable() 
export class AuthService { 
  constructor( 
    private prisma: PrismaService, 
    private jwtService: JwtService, 
  ) {} 
 
  async register(dto: RegisterDto) {
    try {
      const hash = await bcrypt.hash(dto.password, 10);

      return await this.prisma.user.create({
        data: {
          username: dto.username.trim(),
          password: hash,
          role: dto.role,
        },
      });
    } catch (error) {
      throw new UnauthorizedException('Registrasi gagal');
    }
  }
  async login(username: string, password: string) { 
    const user = await this.prisma.user.findUnique({ 
      where: { username }, 
      include: { student: true }, 
    }); 
 
    if (!user) { 
      throw new UnauthorizedException('Username tidak ditemukan'); 
    } 
 
    const passwordValid = await bcrypt.compare(password, user.password); 
    if (!passwordValid) { 
      throw new UnauthorizedException('Password salah'); 
    } 
 
    const payload = { 
      sub: user.id, 
      username: user.username, 
      role: user.role, 
      studenId: user.studenId, 
}; 
return { 
message: 'Login berhasil', 
access_token: this.jwtService.sign(payload), 
}; 
} 
} 