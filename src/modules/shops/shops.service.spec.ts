import { Test, TestingModule } from '@nestjs/testing';
import { ShopsService } from './shops.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ShopsService', () => {
  let service: ShopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopsService, PrismaService],
    }).compile();

    service = module.get<ShopsService>(ShopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
