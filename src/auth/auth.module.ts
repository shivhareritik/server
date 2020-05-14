import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userRepository } from './user.repository';

@Module({
  imports:[
    TypeOrmModule.forFeature([userRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
