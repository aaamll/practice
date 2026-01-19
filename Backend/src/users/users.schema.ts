// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  fullName?: string;

  @Prop({ required: true, unique: true })
  email?: string;

  @Prop({ required: true })
  password?: string;

  @Prop()
  phoneNumber?: string;

  @Prop()
  bio?: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);