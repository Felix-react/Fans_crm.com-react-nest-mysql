import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database.module'; // Import DatabaseModule

@Module({
  imports: [DatabaseModule, UsersModule], // Add DatabaseModule here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
