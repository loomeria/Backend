import { Injectable } from '@nestjs/common';
import { Prisma, Histories } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HistoriesService {
  constructor(private prisma: PrismaService) {}

  async createHistory(data: Prisma.HistoriesCreateInput): Promise<Histories> {
    return this.prisma.histories.create({
      data,
    });
  }

  async getHistoryById(id: string): Promise<Histories | null> {
    return this.prisma.histories.findUnique({
      where: { id_history: id },
    });
  }

  async getHistories(): Promise<Histories[]> {
    return this.prisma.histories.findMany();
  }

  async updateHistory(
    id: string,
    data: Prisma.HistoriesUpdateInput,
  ): Promise<Histories> {
    return this.prisma.histories.update({
      where: { id_history: id },
      data,
    });
  }

  async deleteHistory(id: string): Promise<Histories> {
    return this.prisma.histories.delete({
      where: { id_history: id },
    });
  }
}
