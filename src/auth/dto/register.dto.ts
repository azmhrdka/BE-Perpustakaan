<<<<<<< HEAD
import { IsString, IsNotEmpty } from "class-validator";
import { UserRole } from "@prisma/client";
import { IsEnum } from "class-validator";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(UserRole)
    role: UserRole;
=======
import { IsString, IsNotEmpty } from "class-validator";
import { UserRole } from "@prisma/client";
import { IsEnum } from "class-validator";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(UserRole)
    role: UserRole;
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
}