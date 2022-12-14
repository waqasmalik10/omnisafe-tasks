import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { EventDocument } from 'src/event/models/schema/event';
import { EventSeederData } from './seedingData';

@Injectable()
export class EventSeeder implements Seeder {
  constructor(
    @InjectModel('Event')
    private readonly eventModel: Model<EventDocument>,
  ) {}

  async seed(): Promise<any> {
    for (const event of EventSeederData) {
        await this.eventModel.updateOne(
            { _id: event._id },
            { $set: event },
            { upsert: true },
        );
    }
  }

  async drop(): Promise<any> {
    return this.eventModel.deleteMany({});
  }
}
