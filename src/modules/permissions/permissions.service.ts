import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Prisma, Permissions } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPermissionDto: CreatePermissionDto) {
    return this.prisma.permissions.create({
      data: createPermissionDto,
    });
  }

  findAll() {
    return this.prisma.permissions.findMany();
  }

  findOne(id: number) {
    return this.prisma.permissions.findUnique({ where: { id_permission: id } });
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return this.prisma.permissions.update({
      where: { id_permission: id },
      data: updatePermissionDto,
    });
  }

  remove(id: number) {
    return this.prisma.permissions.delete({ where: { id_permission: id } });
  }
}
