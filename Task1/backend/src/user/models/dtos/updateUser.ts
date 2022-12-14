import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    password:string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    surname: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;
}
