import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { schemaRefs } from 'src/schemaRefs';
import { LoginInterface } from './models/interfaces/login';
import { JwtService } from '@nestjs/jwt';
import {generateHash} from '../utils/generateHash';
import { SignupInterface } from './models/interfaces/signup';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/models/schema/user';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(schemaRefs.user)
        private userModel: Model<User>,

        private jwtService: JwtService
    ){}

    async login(loginData: LoginInterface){

        const {email} = loginData
        const user = await this.userModel.findOne({email})
     
        if(!user){
            throw new  NotFoundException("Invalid Credentials!");
        }

        const payload = {
            user: {
                id : user._id.toString(),
                email: user.email,
                name: user.name,
                surname: user.surname
            }
        }

        const newPasswordHash = await generateHash(loginData.password ,user.salt)


        if(newPasswordHash != user.password){   
            throw new  NotFoundException("Invalid Credentials!")
        }

        const token = this.jwtService.sign(payload) 

        return {token};

    }

    async signup(signup : SignupInterface){

        const {email , password, surname ,name } = signup;

        const user = await this.userModel.findOne({email});

        if(user){
            throw new NotFoundException("Email already exists!");
        }

        try{
            const salt = await bcrypt.genSalt();
            const hash = await generateHash(password , salt);

            await this.userModel.create({
                email,
                password : hash,
                name,
                surname,
                salt
            });

            return "User Created successfully!"
        }catch(error){
            throw new InternalServerErrorException(error);
        }

    }


}
