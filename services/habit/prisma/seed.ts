import { ChallengeType, PrismaClient } from '@prisma-client/habit';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.badge.deleteMany();
  await prisma.challenge.deleteMany();
  await prisma.badge.createMany({
    data: [
      // walking
      { name: 'First Steps', type: ChallengeType.walking },
      { name: 'Daily Walker', type: ChallengeType.walking },
      { name: 'Trail Explorer', type: ChallengeType.walking },
      { name: 'Marathon Marcher', type: ChallengeType.walking },

      // yoga
      { name: 'Zen Beginner', type: ChallengeType.yoga },
      { name: 'Stretch Master', type: ChallengeType.yoga },
      { name: 'Flow Seeker', type: ChallengeType.yoga },
      { name: 'Balance Guru', type: ChallengeType.yoga },

      // running
      { name: 'Quick Start', type: ChallengeType.running },
      { name: '5Km Finisher', type: ChallengeType.running },
      { name: 'Endurance Runner', type: ChallengeType.running },
      { name: 'Speed Demon', type: ChallengeType.running },

      // meditation
      { name: 'Silent Starter', type: ChallengeType.meditation },
      { name: 'Calm Mind', type: ChallengeType.meditation },
      { name: 'Mindfulness Monk', type: ChallengeType.meditation },
      { name: 'Inner Peacekeeper', type: ChallengeType.meditation },

      // swimming
      { name: 'Pool Rookie', type: ChallengeType.swimming },
      { name: 'Wave Rider', type: ChallengeType.swimming },
      { name: 'Aqua Challenger', type: ChallengeType.swimming },
      { name: 'Ocean Master', type: ChallengeType.swimming },
    ],
  });
  const badge = await prisma.badge.findFirst({
    where: { name: 'First Steps' },
  });

  if (!badge) throw new Error('Badge not found');
  await prisma.challenge.createMany({
    data: [
      {
        name: 'Walking Challenge',
        type: ChallengeType.walking,
        point: 100,
        badgeId: badge.id,
        locationName: 'Gia Dinh Park',
        latitude: 10.8123,
        longitude: 106.6789,
        target: 3,
      },
      {
        name: '5km running in rain',
        type: ChallengeType.running,
        point: 300,
        locationName: 'Le Van Tam Park',
        latitude: 10.8123,
        longitude: 106.6789,
        target: 5,
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
