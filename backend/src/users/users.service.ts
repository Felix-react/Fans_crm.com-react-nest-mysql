// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { SignupAuthDto } from '../auth/dto/signup-auth.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  // Create a new user using the SignupAuthDto
  async createUser(signupAuthDto: SignupAuthDto): Promise<User> {
    const { name, email, phone, password } = signupAuthDto;

    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User();
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = password;
    return user.save();
  }

  // Get user by ID
  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Get user by email
  async getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email } });
  }
}
