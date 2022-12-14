import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { schemaRefs } from 'src/schemaRefs';
import { UserSchema } from 'src/user/models/schema/user';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventSchema } from './models/schema/event';
import { EventTypeSchema } from './models/schema/eventType';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: schemaRefs.event, schema: EventSchema },
            { name: schemaRefs.user, schema: UserSchema },
            { name: schemaRefs.eventType, schema: EventTypeSchema },
        ]),
    ],
    controllers: [EventController],
    providers: [EventService],
})
export class EventModule {}
