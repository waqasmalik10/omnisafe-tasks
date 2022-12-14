import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { EventTypeDocument } from 'src/event/models/schema/eventType';
import { EventTypeSeederData } from './seedingData';

@Injectable()
export class EventTypeSeeder implements Seeder {
  constructor(
    @InjectModel('EventType')
    private readonly eventTypeModel: Model<EventTypeDocument>,
  ) {}

  async seed(): Promise<any> {
    for (const eventType of EventTypeSeederData) {
      await this.eventTypeModel.updateOne(
        { _id: eventType._id },
        { $set: eventType },
        { upsert: true },
      );
    }
  }

  async drop(): Promise<any> {
    return this.eventTypeModel.deleteMany({});
  }
}
