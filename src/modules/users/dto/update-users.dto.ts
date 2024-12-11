import { z } from 'zod';

export const UserUpdateDto = z.object({
  civility: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  username: z.string().optional(),
  mail: z.string().email().optional(),
  id_permission: z.number().optional(),
  verify_email: z.boolean().optional(),
});

export type UserUpdateDto = z.infer<typeof UserUpdateDto>;
