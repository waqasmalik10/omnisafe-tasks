import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { schemaRefs } from "src/schemaRefs";

@Schema({
    timestamps: true,
    versionKey: false
})
export class Event extends Document {
    @Prop({required: true, type: Types.ObjectId, ref: schemaRefs.user})
    userId: string;

    @Prop({required: true, unique: true})
    name: string

    @Prop()
    description: string;

    @Prop({required: true})
    eventDate: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
