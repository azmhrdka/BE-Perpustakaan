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
}