import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentalController } from './environmental.controller';

describe('EnvironmentalController', () => {
  let controller: EnvironmentalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvironmentalController],
    }).compile();

    controller = module.get<EnvironmentalController>(EnvironmentalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
