import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { schemaRefs } from 'src/schemaRefs';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth.strategy';
import { UserSchema } from 'src/user/models/schema/user';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: schemaRefs.user, schema: UserSchema },
        ]),
        PassportModule,
        JwtModule.register({
            secret: 'somesupersecretsecret',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
