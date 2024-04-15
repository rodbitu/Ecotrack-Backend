// /interfaces/environmental.interface.ts
import { Document } from 'mongoose';

export interface Environmental extends Document {
  name: string;
  description: string;
  value: number;
}
