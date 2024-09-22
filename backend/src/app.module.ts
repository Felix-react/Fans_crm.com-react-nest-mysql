import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database.module'; // Import DatabaseModule
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule], // Add DatabaseModule here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
