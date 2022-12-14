import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({
    timestamps: true,
    versionKey: false
})
export class EventType extends Document {

    @Prop({required: true, unique: true})
    name: string;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
