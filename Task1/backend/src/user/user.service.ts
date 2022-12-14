import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { schemaRefs } from 'src/schemaRefs';
import { UpdateUserInterface } from './models/interfaces/updateUser';
import { User } from './models/schema/user';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(schemaRefs.user)
        private userModel: Model<User>
    ){}

    async updateUser(updateUser: UpdateUserInterface, user: any){
        const{id} = user;

        const updatedUser = await this.userModel.findByIdAndUpdate(id, {
            $set: updateUser
        }, {returnOriginal: false});

        return updatedUser;
    }

    async getUser(userId: string){
        
        const isValidMongodbId = isValidObjectId(userId);

        if(!isValidMongodbId){
            throw new BadRequestException("id must be a mongodb id!");
        }

        const user:any = await this.userModel.findById(userId);

        if(!user){
            throw new NotFoundException("user does not exists!")
        }

        const {password, salt, ...restUser} = user._doc;
        return restUser;
        
    }
}
