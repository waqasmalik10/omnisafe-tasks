import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { PaginationDto } from 'src/common/dtos/pagination';

export class StatusDto extends PaginationDto {
    @IsString()
    @IsNotEmpty()
    @IsIn(['active', 'past'])
    status: string;
}
