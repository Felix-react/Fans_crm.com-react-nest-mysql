// src/users/users.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // POST /api/v1/add-user: Adds a new user to the database
  @Post('add-user')
  async addUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.createUser(createUserDto);
    console.log('User added:', user);
    return user;
  }

  // GET /api/v1/get-user/:id: Retrieves a user by ID
  @Get('get-user/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }
}
