import { PassportStrategy } from "@nestjs/passport";
import {Strategy , ExtractJwt } from 'passport-jwt'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { UnauthorizedException } from "@nestjs/common";
import { schemaRefs } from "src/schemaRefs";
import { User } from "src/user/models/schema/user";

export class JwtStrategy extends PassportStrategy(Strategy){


    constructor(
        @InjectModel(schemaRefs.user)
        private userModel : Model<User>
    ){
        super({
            jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.AUTH_SECRET
        })
    }

    async validate(payload){
        const { id } = payload.user;
        
        const user =  await this.userModel.findById(id)
        if(!user){
            throw new UnauthorizedException();
        }
        return user
    }
}
