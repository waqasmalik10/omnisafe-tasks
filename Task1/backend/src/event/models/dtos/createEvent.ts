import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDateString()
    @IsNotEmpty()
    eventDate: string
}