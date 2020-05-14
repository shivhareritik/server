import { Controller, Post, Body, UsePipes, ValidationPipe, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authCredentialDto } from './dto/authCredentials.dto';
@Controller('auth')
export class AuthController {
    constructor (private authService:AuthService) {}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() authCredentialDto: authCredentialDto) {
        return this.authService.signUp(authCredentialDto);
    }

    @Post('/signin')
    @UsePipes(ValidationPipe)
    signIn(@Body() authCredentialDto:authCredentialDto): Promise<any> {
        const userName =  this.authService.signIn(authCredentialDto);
        if(userName) {
            throw new UnauthorizedException('Invalid Credentials')
        } else {

            return this.authService.signIn(authCredentialDto);
        }
    }
}
