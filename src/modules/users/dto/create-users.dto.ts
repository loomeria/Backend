export class CreateUserDto {
  civility: string;
  first_name: string;
  last_name: string;
  username: string;
  mail: string;
  password: string;
  id_permission: number;
  verify_mail: boolean;
  id_user: number;
}
