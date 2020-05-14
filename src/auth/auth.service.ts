import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userRepository } from './user.repository';
import { authCredentialDto } from './dto/authCredentials.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor (@InjectRepository(userRepository) private userRepository: userRepository) {}

    signUp(authCredentialDto: authCredentialDto): Promise<User> {
        return this.userRepository.signup(authCredentialDto);
    }

    signIn(authCredentialDto:authCredentialDto): Promise<any> {
        return this.userRepository.validateUserPassword(authCredentialDto);
    }
}
