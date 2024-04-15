import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EnvironmentalService } from './environmental.service';
import { CreateEnvironmentalDto } from './dto/create-environmental.dto';
import { UpdateEnvironmentalDto } from './dto/update-environmental.dto';

@Controller('environmental')
export class EnvironmentalController {
  constructor(private environmentalService: EnvironmentalService) {}

  @Post()
  createEnvironmentalData(
    @Body() createEnvironmentalDto: CreateEnvironmentalDto,
  ) {
    return this.environmentalService.create(createEnvironmentalDto);
  }

  @Get()
  getEnvironmentalData() {
    return this.environmentalService.findAll();
  }

  @Get(':id')
  getEnvironmentalDataById(@Param('id') id: string) {
    return this.environmentalService.findOne(id);
  }

  @Put(':id')
  updateEnvironmentalData(
    @Param('id') id: string,
    @Body() updateEnvironmentalDto: UpdateEnvironmentalDto,
  ) {
    return this.environmentalService.update(id, updateEnvironmentalDto);
  }

  @Delete(':id')
  deleteEnvironmentalData(@Param('id') id: string) {
    return this.environmentalService.delete(id);
  }
}
