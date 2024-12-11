// import { Injectable } from '@nestjs/common';
// import { Prisma, Users } from '@prisma/client';
// import { PrismaService } from '../../prisma.service';
//
// @Injectable()
// export class UsersService {
//   constructor(private readonly prisma: PrismaService) {}
//
//   async findOne(username: string): Promise<Users | null> {
//     return this.prisma.users.findFirst({
//       where: {
//         username: username,
//       },
//     });
//   }
  //
  // async createUser({
  //                    data,
  //                  }: {
  //   data: Prisma.UsersCreateInput;
  // }): Promise<Users> {
  //   return this.prisma.users.create({
  //     data,
  //   });
  // }
  //
  // async getUserById(id: number): Promise<Users | null> {
  //   return this.prisma.users.findUnique({
  //     where: { id_user: id },
  //   });
  // }
  //
  // async getAllUsers(): Promise<Users[]> {
  //   return this.prisma.users.findMany();
  // }
  //
  // async updateUser(id: number, data: Partial<Users>): Promise<Users> {
  //   return this.prisma.users.update({
  //     where: { id_user: id },
  //     data,
  //   });
  // }
  //
  // async deleteUser(id: number): Promise<Users> {
  //   return this.prisma.users.update({
  //     where: { id_user: id },
  //     data: { deleted_at: new Date() },
  //   });
  // }
}
