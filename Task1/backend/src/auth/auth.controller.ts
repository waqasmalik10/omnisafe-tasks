import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './models/dtos/login';
import { SignupDto } from './models/dtos/signup';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('login')
    login(@Body(ValidationPipe) loginData: LoginDTO){
        return this.authService.login(loginData);
    }


    @Post('signup')
    signup(@Body(ValidationPipe) signupData: SignupDto){
        return this.authService.signup(signupData);
    }
}
