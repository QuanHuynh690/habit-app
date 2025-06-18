import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';

describe('ChallengeController', () => {
  let challengeController: ChallengeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeController],
      providers: [ChallengeService],
    }).compile();

    challengeController = app.get<ChallengeController>(ChallengeController);
  });

  describe('root', () => {
    it('should return user list', () => {
      expect(challengeController.findAll({ page: 1, pageSize: 10 })).toBe(
        'Hello World!',
      );
    });
  });
});
