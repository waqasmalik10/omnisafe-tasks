import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({
    timestamps: true,
    versionKey: false
})
export class User extends Document {
    @Prop({required: true})
    name: string

    @Prop()
    surname: string

    @Prop({
        unique: true,
        required: true
    })
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({required: true})
    salt: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
