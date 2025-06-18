import { Module } from '@nestjs/common';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';
import { PrismaService } from '../shared/prisma.service';

@Module({
  imports: [],
  controllers: [ChallengeController],
  providers: [ChallengeService, PrismaService],
})
export class ChallengeModule {}
