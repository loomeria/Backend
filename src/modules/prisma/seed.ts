import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.users.create({
    data: {
      id_user: 1,
      civility: 'Mr',
      first_name: 'Test',
      last_name: 'User',
      mail: 'test@example.com',
      username: 'Test User',
      password: 'securepassword',
      verify_mail: true,
      id_permission: 1,
    },
  });
  console.log('User created:', user);
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
