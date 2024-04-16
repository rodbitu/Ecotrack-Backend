import * as mongoose from 'mongoose';

export const DataSchema = new mongoose.Schema({}, { strict: true });

export type DataDocument = mongoose.Document;
