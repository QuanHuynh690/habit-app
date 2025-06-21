import { ChallengeType, PrismaClient } from '@prisma-client/habit';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  const badge1 = await prisma.badge.create({
    data: {
      name: 'Bronze Walker',
    },
  });

  await prisma.challenge.createMany({
    data: [
      {
        name: 'Walking Challenge',
        type: ChallengeType.running,
        point: 100,
        badgeId: badge1.id,
        locationName: 'Công viên Gia Định',
        latitude: 10.8123,
        longitude: 106.6789,
        target: 60,
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
