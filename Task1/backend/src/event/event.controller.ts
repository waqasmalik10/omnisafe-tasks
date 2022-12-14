import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseGuards,
    ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/common/decorators/getUser';
import { EventService } from './event.service';
import { CreateEventDto } from './models/dtos/createEvent';
import { StatusDto } from './models/dtos/status';
import { UpdateEventDto } from './models/dtos/updateEvent';

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    getEvents(@Query(ValidationPipe) query: StatusDto) {
        const { status, limit, offset } = query;
        return this.eventService.getEvents(status, { limit, offset });
    }

    @Get('types')
    getEventTypes() {
        return this.eventService.getEventTypes();
    }

    // @Get()
    // getAllEvents(){
    //     return this.eventService.getAllEvents()
    // }

    // @Get(':id')
    // getByEventId(
    //     @Param('id') id: string
    // ){
    //     return this.eventService.getByEventId(id)
    // }

    @UseGuards(JwtAuthGuard)
    @Post()
    createEvent(
        @Body(ValidationPipe) eventDto: CreateEventDto,
        @GetUser() user,
    ) {
        return this.eventService.createEvent(eventDto, user);
    }

    @Put(':id')
    updateEvent(
        @Param('id', ValidationPipe) id: string,
        @Body(ValidationPipe) updateEvent: UpdateEventDto,
    ) {
        return this.eventService.updateEvent(id, updateEvent);
    }

    @Delete(':id')
    deleteEvent(@Param('id', ValidationPipe) id: string) {
        return this.eventService.deleteEvent(id);
    }
}
