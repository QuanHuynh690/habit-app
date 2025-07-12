const { execSync } = require('child_process');

const schemas = [
  'services/user/prisma/schema.prisma',
  // 'services/auth/prisma/schema.prisma',
  'services/habit/prisma/schema.prisma',
];

schemas.forEach((schema) => {
  console.log(`Generating Prisma Client for ${schema}`);
  execSync(`npx prisma generate --schema=${schema}`, { stdio: 'inherit' });
});
