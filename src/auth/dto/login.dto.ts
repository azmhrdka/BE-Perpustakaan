<<<<<<< HEAD
import { IsNotEmpty, IsString } from 'class-validator'; 
 
export class LoginDto { 
  @IsString() 
  @IsNotEmpty() 
  username: string; 
 
  @IsString() 
  @IsNotEmpty() 
  password: string; 
=======
import { IsNotEmpty, IsString } from 'class-validator'; 
 
export class LoginDto { 
  @IsString() 
  @IsNotEmpty() 
  username: string; 
 
  @IsString() 
  @IsNotEmpty() 
  password: string; 
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
}