import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataDocument } from './schemas/data.schema';

@Injectable()
export class DataService {
  constructor(
    @InjectModel('Data')
    private dataModel: Model<DataDocument>,
  ) {}

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    return this.dataModel.find().skip(skip).limit(limit).exec();
  }

  async findOne(id: string) {
    return this.dataModel.findById(id).exec();
  }
}
