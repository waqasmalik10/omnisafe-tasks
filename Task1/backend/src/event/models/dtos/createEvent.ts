import { IsDate, IsDateString, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsDateString()
    @IsNotEmpty()
    eventDate: string;

    @IsNotEmpty()
    @IsMongoId()
    eventType: string;
}

