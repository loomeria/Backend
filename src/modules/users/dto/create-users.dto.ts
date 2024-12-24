import { z } from 'zod';

export const UserCreateDto = z.object({
  civility: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  mail: z.string().email(),
  password: z.string(),
  id_permission: z.number(),
  verify_mail: z.boolean(),
});

export type UserCreateDto = z.infer<typeof UserCreateDto>;
//