import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EnvironmentalDocument } from './schemas/environmental.schema';
import { CreateEnvironmentalDto } from './dto/create-environmental.dto';
import { UpdateEnvironmentalDto } from './dto/update-environmental.dto';
import { Environmental } from './interfaces/environmental.interface';

@Injectable()
export class EnvironmentalService {
  constructor(
    @InjectModel('Environmental')
    private environmentalModel: Model<EnvironmentalDocument>,
  ) {}

  async create(
    createEnvironmentalDto: CreateEnvironmentalDto,
  ): Promise<Environmental> {
    const newEnvironmental = new this.environmentalModel(
      createEnvironmentalDto,
    );
    return newEnvironmental.save();
  }

  async findAll(): Promise<Environmental[]> {
    return this.environmentalModel.find().exec();
  }

  async findOne(id: string): Promise<Environmental> {
    return this.environmentalModel.findById(id).exec();
  }

  async update(
    id: string,
    updateEnvironmentalDto: UpdateEnvironmentalDto,
  ): Promise<Environmental> {
    return this.environmentalModel
      .findByIdAndUpdate(id, updateEnvironmentalDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.environmentalModel.findByIdAndDelete(id).exec();
  }
}
