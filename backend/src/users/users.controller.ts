// src/users/users.controller.ts
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupAuthDto } from '../auth/dto/signup-auth.dto';
import { User } from './users.model';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Create a new user (sign up)
  @Post('create')
  async createUser(@Body() signupAuthDto: SignupAuthDto): Promise<User> {
    return this.usersService.createUser(signupAuthDto);
  }

  // Get user by ID
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
