import { Body, Controller, Get, Param, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/common/decorators/getUser';
import { UpdateUserDto } from './models/dtos/updateUser';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
    constructor(
        private userSrevice: UserService
    ){}

    @Get(':id')
    getUser(
        @Param('id') id: string
    ){
        return this.userSrevice.getUser(id)
    }
    
    @Put()
    updateUser(
        @GetUser() user: any,
        @Body(ValidationPipe) updateUser: UpdateUserDto
    ){
        return this.userSrevice.updateUser(updateUser, user)
    }
}
