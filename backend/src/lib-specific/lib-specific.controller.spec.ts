import { Test, TestingModule } from '@nestjs/testing';
import { LibSpecificController } from './lib-specific.controller';

describe('LibSpecificController', () => {
  let controller: LibSpecificController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibSpecificController],
    }).compile();

    controller = module.get<LibSpecificController>(LibSpecificController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
