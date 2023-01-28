import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IpDocument = Ip & Document;

@Schema()
export class Ip {
  @Prop({ required: true, index: true })
  ipAddress: string;

  @Prop({ default: {}, type: {} })
  data: Record<string, any>;
}

export const IpSchema = SchemaFactory.createForClass(Ip);

export const IP = 'Ip';
