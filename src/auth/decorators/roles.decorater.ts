<<<<<<< HEAD
import { SetMetadata } from '@nestjs/common'; 
import { UserRole } from '@prisma/client';

export const Roles = (...roles: UserRole[]) => 
    SetMetadata('roles', roles); 
=======
import { SetMetadata } from '@nestjs/common'; 
import { UserRole } from '@prisma/client';

export const Roles = (...roles: UserRole[]) => 
    SetMetadata('roles', roles); 
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
