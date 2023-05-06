import { Document } from 'mongoose';

export interface Bike extends Document {
  name: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
}
