<<<<<<< HEAD
import { PassportStrategy } from '@nestjs/passport'; 
import { Strategy, ExtractJwt } from 'passport-jwt'; 
import { Injectable } from '@nestjs/common'; 
@Injectable() 
export class JwtStrategy extends 
PassportStrategy(Strategy) { 
    constructor() { 
        super({ 
            jwtFromRequest: 
ExtractJwt.fromAuthHeaderAsBearerToken(), 
            secretOrKey: 'SECRET_KEY', 
        }); 
    } 
    validate(payload: any) { 
    return payload; 
    } 
=======
import { PassportStrategy } from '@nestjs/passport'; 
import { Strategy, ExtractJwt } from 'passport-jwt'; 
import { Injectable } from '@nestjs/common'; 
@Injectable() 
export class JwtStrategy extends 
PassportStrategy(Strategy) { 
    constructor() { 
        super({ 
            jwtFromRequest: 
ExtractJwt.fromAuthHeaderAsBearerToken(), 
            secretOrKey: 'SECRET_KEY', 
        }); 
    } 
    validate(payload: any) { 
    return payload; 
    } 
>>>>>>> e2f65dab517c06bca5561cee912ad2634e206476
}