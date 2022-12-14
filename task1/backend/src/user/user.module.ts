import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { schemaRefs } from 'src/schemaRefs';
import { UserSchema } from './models/schema/user';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: schemaRefs.user, schema: UserSchema },
        ]),
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
