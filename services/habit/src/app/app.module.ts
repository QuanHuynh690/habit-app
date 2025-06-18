import { Module } from '@nestjs/common';
import { ChallengeModule } from 'src/challenge/challenge.module';

@Module({
  imports: [ChallengeModule],
})
export class AppModule {}
