import { Controller, Get, Query, Param } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    page = page || 1;
    limit = limit || 10;
    return this.dataService.findAll(+page, +limit);
  }

  @Get(':id')
  getDataDataById(@Param('id') id: string) {
    return this.dataService.findOne(id);
  }
}
