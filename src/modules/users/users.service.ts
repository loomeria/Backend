import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Permissions, Users } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const SaltOrRounds = 10;

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

  async findByEmail(email: string): Promise<Users | null> {
    try {
      return this.prisma.users.findFirst({
        where: {
          username: email,
        },
      });
    } catch (error) {
      return error;
    }
  }

  // async createUser({ data }: { data: Users }): Promise<Users> {
  //
  //   console.log("PERMISSIONS : " + data.id_permission);
  //
  //   if(data.password !== null){
  //     data.password = await bcrypt.hash(data.password, SaltOrRounds);
  //   }
  //
  //   return this.prisma.users.create({
  //     data
  //   });
  // }

  async createUser({ data }: { data: Users }): Promise<Users> {
    console.log('PERMISSIONS : ' + data.id_permission);

    // Hash du mot de passe si fourni
    if (data.password !== null && data.password.trim() !== '') {
      data.password = await bcrypt.hash(data.password, SaltOrRounds);
    }

    // Validation de l'id_permission
    if (!data.id_permission) {
      throw new Error('id_permission is required to create a user');
    }

    return this.prisma.users.create({
      data: {
        civility: data.civility,
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        mail: data.mail,
        verify_mail: data.verify_mail,
        password: data.password,
        created_at: data.created_at ?? undefined, // Utilisez undefined si aucune valeur
        updated_at: data.updated_at ?? undefined,
        deleted_at: data.deleted_at ?? undefined,
        last_login: data.last_login ?? undefined,
        // Gestion de la relation avec Permissions
        permission: {
          connect: { id_permission: data.id_permission }, // Connecte à une permission existante
        },
      },
    });
  }

  // async create(createUserDto: UserCreateDto){
  //   const user = await this.prisma.users.create(createUserDto)
  // }

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
    data.updated_at = new Date();

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

  async usernameAlreadyExists(username: string): Promise<boolean> {
    const user = await this.prisma.users.findFirst({
      where: {
        username: username,
      },
    });
    return !!user;
  }

  async usernameAlreadyExistsExceptCurrentUsername(
    username: string,
    id: number,
  ): Promise<boolean> {
    const user = await this.prisma.users.findFirst({
      where: {
        username: username,
        id_user: {
          not: id,
        },
      },
    });

    return !!user;
  }

  async UpdatePassword(id: number, password: string): Promise<Users> {
    const hashedPassword = await bcrypt.hash(password, SaltOrRounds);
    return this.prisma.users.update({
      where: { id_user: id },
      data: { password: hashedPassword },
    });
  }

  static passwordIsValid(password: string): boolean {
    if (password.length < 8) {
      return false;
    }
    if (!/[a-z]/.test(password)) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[0-9]/.test(password)) {
      return false;
    }
    if (!/[@$!%*?&\-_#]/.test(password)) {
      return false;
    }
    if (/\s/.test(password)) {
      return false;
    }

    return true;
  }

  async getPermissionsByUserId(id: number): Promise<Permissions | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        id_user: id,
      },
      select: {
        id_permission: true,
      },
    });

    // Vérification si l'utilisateur existe
    if (!user) {
      console.error(`Utilisateur avec l'ID ${id} non trouvé.`);
      return null; // Ou vous pouvez lancer une exception
    }

    // Recherche des permissions associées
    const permissions = await this.prisma.permissions.findUnique({
      where: {
        id_permission: user.id_permission,
      },
    });

    // Vérification si les permissions existent
    if (!permissions) {
      console.error(
        `Permissions pour l'ID ${user.id_permission} non trouvées.`,
      );
      return null; // Ou gérer selon vos besoins
    }

    return permissions;
  }

  async throwErrorUserNotFound(id: number) {
    if (!(await this.userExistsById(Number(id)))) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
