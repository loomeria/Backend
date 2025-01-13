import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HistoriesService } from './histories.service';
import { Prisma, Histories } from '@prisma/client';

@Controller('histories')
export class HistoriesController {
  constructor(private readonly historiesService: HistoriesService) {}

  @Post()
  async create(@Body() data: Prisma.HistoriesCreateInput): Promise<Histories> {
    return this.historiesService.createHistory(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Histories | null> {
    return this.historiesService.getHistoryById(id);
  }

  @Get()
  async findAll(): Promise<Histories[]> {
    return this.historiesService.getHistories();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.HistoriesUpdateInput,
  ): Promise<Histories> {
    return this.historiesService.updateHistory(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Histories> {
    return this.historiesService.deleteHistory(id);
  }
}
