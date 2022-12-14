import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SignupDto{

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsString()
    password:string

    @IsNotEmpty()
    @IsString()
    surname : string
    
    @IsNotEmpty()
    @IsString()
    name:string
}
