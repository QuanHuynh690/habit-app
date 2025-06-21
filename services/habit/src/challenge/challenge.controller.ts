import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Version,
} from '@nestjs/common';
import { ApiBody, ApiQuery } from '@nestjs/swagger';

import { FetchItemsDto } from '@shared/dtos';
import { FetchItemsDtoReqBody } from '@shared/contracts/fetch-items.contract';
import { CreateChallengeDto, ChallengeDto } from '@shared/contracts';

import { ChallengeService } from './challenge.service';
@Controller()
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}
  /**
   * Get all challenges.
   *
   * @returns A promise that resolves to an array of Challenge objects.
   *
   */
  @Get('challenges')
  @Version('1')
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'userLat', required: false, type: Number, example: 0 })
  @ApiQuery({ name: 'userLng', required: false, type: Number, example: 0 })
  async findAll(
    @Query() query: FetchItemsDtoReqBody,
  ): Promise<FetchItemsDto<ChallengeDto>> {
    return await this.challengeService.fetchChallenges(query);
  }

  /**
   * Get a challenge by id.
   *
   * @param id - id of the challenge.
   * @returns A promise that resolves found challenge.
   */
  @Get('challenges/:id')
  @Version('1')
  async findById(@Param('id') id: string): Promise<ChallengeDto> {
    return await this.challengeService.findChallengeById(id);
  }

  /**
   * Create a challenge.
   *
   * @param challengeBody - detail of the challenge.
   * @returns A promise that resolves created challenge.
   */
  @Post('challenges')
  @Version('1')
  @ApiBody({ type: CreateChallengeDto })
  async createChallenge(
    @Body() challengeBody: CreateChallengeDto,
  ): Promise<ChallengeDto> {
    return await this.challengeService.createChallenge(challengeBody);
  }
}
