import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PaginationInterface } from 'src/common/interfaces/pagination';
import { schemaRefs } from 'src/schemaRefs';
import { User } from 'src/user/models/schema/user';
import { CreateEventInterface } from './models/interfaces/createEvent';
import { UpdateEventInterface } from './models/interfaces/updateEvent';
import { EventType } from './models/schema/eventType';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(schemaRefs.event)
        private eventModel: Model<Event>,

        @InjectModel(schemaRefs.user)
        private userModel: Model<User>,

        @InjectModel(schemaRefs.eventType)
        private eventTypeModel: Model<EventType>
    ){}

    async getEvents(status: string, pagination: PaginationInterface){

        let condition: any = {$gte: new Date().toISOString()}
        if(status === 'past'){
            condition = {$lt: new Date().toISOString()}
        }

        console.log({ condition })
        try{
            const allEvents = await this.eventModel.find({
                eventDate: condition
            });

            return allEvents;
        }catch(err){
            throw new InternalServerErrorException(err);
        }
    }

    async getEventTypes(){

        const eventTypes = await this.eventTypeModel.find();

        return eventTypes;
    }

    async createEventType(){
        await this.eventTypeModel.create({
            name: 'Cultural Event'
        })
    }

    // async getAllEvents(){

    //     try{
    //         const allEvents = await this.eventModel.find();

    //         return allEvents;
    //     }catch(err){
    //         throw new InternalServerErrorException(err);
    //     }
    // }

    // async getByEventId(id: string){

    //     const isValidMongoId = isValidObjectId(id);

    //     if(!isValidMongoId){
    //         throw new BadRequestException('Invalid mongodb id!');
    //     }

    //     const event = await this.eventModel.findById(id);

    //     if(!event){
    //         throw new NotFoundException('Event not found!')
    //     }

    //     return event;
    // }

    async createEvent(createEvent: CreateEventInterface, user: any){
        const{id} = user;

        const{name} = createEvent;
        const isNameExists = await this.eventModel.findOne({name: { $regex: `${name}$`, $options: 'i'}});

        if(isNameExists){
            throw new ConflictException("event name already exists! It should be unique!")
        }

        try{
            const newEvent = await this.eventModel.create({
                userId: id,
                ...createEvent
            });
    
            return {success: !!newEvent};
        }catch(err){
            throw new InternalServerErrorException(err);
        }

    }

    async updateEvent(id: string, updateEvent: UpdateEventInterface){

        const isValid = isValidObjectId(id);

        if(!isValid){
            throw new BadRequestException("id must be valid mongodb id!")
        }

        const event = await this.eventModel.findByIdAndUpdate(id, {
            $set: updateEvent
        }, {returnOriginal: false});

        if(!event){
            throw new NotFoundException("event does not exist!");
        }

        return !!event

    }

    async deleteEvent(id: string){

        const isValid = isValidObjectId(id);

        if(!isValid){
            throw new BadRequestException("id must be valid mongodb id!")
        }

        const event = await this.eventModel.findOne({_id: id});

        if(!event){
            throw new NotFoundException("event does not exist!");
        }

        const deleted = await event.delete();

        return {success: !!deleted};

    }
}
