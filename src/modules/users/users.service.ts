import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(username: string): Promise<Users | null> {
    try {
      return this.prisma.users.findFirst({
        where: {
          username: username,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async createUser({ data }: { data: Users }): Promise<Users> {
    return this.prisma.users.create({
      data,
    });
  }

  async getUserById(id: number): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: {
        id_user: id,
      },
    });
  }

  async getAllUsers(): Promise<Users[]> {
    return this.prisma.users.findMany();
  }

  async updateUser(id: number, data: Partial<Users>): Promise<Users> {
    return this.prisma.users.update({
      where: { id_user: id },
      data,
    });
  }

  async deleteUser(id: number): Promise<Users> {
    return this.prisma.users.update({
      where: { id_user: id },
      data: { deleted_at: new Date() },
    });
  }

  async userExistsById(id: number): Promise<boolean> {
    const user = await this.prisma.users.findUnique({
      where: {
        id_user: id,
      },
    });
    return !!user;
  }
}
