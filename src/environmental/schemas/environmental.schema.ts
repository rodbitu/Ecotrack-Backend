import * as mongoose from 'mongoose';
import { Environmental } from '../interfaces/environmental.interface';

export const EnvironmentalSchema = new mongoose.Schema<Environmental>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: Number, required: true },
  },
  { timestamps: true },
);

export type EnvironmentalDocument = Environmental & mongoose.Document;
