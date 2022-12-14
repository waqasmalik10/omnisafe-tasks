import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { UserDocument } from 'src/user/models/schema/user';
import { UserSeederData } from './seedingData';

@Injectable()
export class UserSeeder implements Seeder {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
  ) {}

  async seed(): Promise<any> {
    for (const user of UserSeederData) {
        await this.userModel.updateOne(
            { _id: user._id },
            { $set: user },
            { upsert: true },
        );
    }
  }

  async drop(): Promise<any> {
    return this.userModel.deleteMany({});
  }
}
