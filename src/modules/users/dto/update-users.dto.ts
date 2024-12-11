export class UpdateUserDto {
  civility?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  mail?: string;
  password?: string;
  id_permission?: number;
  deleted_at?: Date; // Optionnel pour un soft delete
}
