import { PrismaClient } from '@prisma-client/habit';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  const reward1 = await prisma.reward.create({
    data: {
      point: 100,
      badge: 'Bronze Walker',
    },
  });

  const location1 = await prisma.challengeLocation.create({
    data: {
      name: 'Công viên Gia Định',
      latitude: 10.8123,
      longitude: 106.6789,
    },
  });

  await prisma.challenge.createMany({
    data: [
      {
        name: 'Walking Challenge',
        type: 'yoga',
        rewardId: reward1.id,
        locationId: location1.id,
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
