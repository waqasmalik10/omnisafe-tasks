import { IsNumberString, IsOptional } from "class-validator";

export class PaginationDto{

    @IsOptional()
    @IsNumberString()
    limit: string;

    @IsOptional()
    @IsNumberString()
    offset: string;
}