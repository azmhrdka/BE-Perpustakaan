import { Controller, Post, Body } from '@nestjs/common'; 
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service'; 
import { LoginDto } from './dto/login.dto'; 
import { RegisterDto } from './dto/register.dto';
import { Public } from './guards/public.decorator'; 

@ApiTags('auth')
@Controller('auth') 
export class AuthController { 
    constructor(private authService: AuthService) {}

    @Post('login') 
    @Public()
    @ApiOperation({ summary: 'Login user dan menghasilkan JWT token' }) 
    login(@Body() dto: LoginDto) { 
        return this.authService.login(dto.username, dto.password); 
    } 

    @Post('register')
    @Public()
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }
}
