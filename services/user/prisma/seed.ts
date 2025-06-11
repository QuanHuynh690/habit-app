import { PrismaClient } from '@prisma-client/user';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.user.createMany({
    data: [
      {
        firstName: 'Alice',
        lastName: 'Nguyen',
        point: 100,
        profilePicture: null,
      },
      {
        firstName: 'Bob',
        lastName: 'Tran',
        point: 50,
        profilePicture: null,
      },
    ],
  });

  console.log('✅ Seed data inserted!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Error while seeding:', e);
    process.exit(1);
  });
