import { seeder } from 'nestjs-seeder';
import { MongooseModule } from '@nestjs/mongoose';
import { EventTypeSchema } from 'src/event/models/schema/eventType';
import { EventSchema } from 'src/event/models/schema/event';
import { UserSchema } from 'src/user/models/schema/user';
import { ConfigModule } from '@nestjs/config';
import { EventTypeSeeder } from './eventType.seed';
import { EventSeeder } from "./event.seed"
import { UserSeeder } from "./user.seed"

seeder({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost/omnisafe'),
    MongooseModule.forFeature([
      { name: "EventType", schema: EventTypeSchema },
      { name: "Event", schema: EventSchema },
      { name: "User", schema: UserSchema }
    ]),
  ],
}).run([EventTypeSeeder, EventSeeder, UserSeeder]);
