import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentalController } from './environmental.controller';
import { EnvironmentalService } from './environmental.service';
import { EnvironmentalSchema } from './schemas/environmental.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Environmental', schema: EnvironmentalSchema },
    ]),
  ],
  controllers: [EnvironmentalController],
  providers: [EnvironmentalService],
})
export class EnvironmentalModule {}
