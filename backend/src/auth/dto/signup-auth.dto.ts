// src/auth/dto/signup-auth.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SignupAuthDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phone: string; // Add any other fields you need for user creation
}
