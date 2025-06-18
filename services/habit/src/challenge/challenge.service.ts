import { Injectable, NotFoundException } from '@nestjs/common';
import { FetchItemsDtoReqBody } from '@shared/contracts/fetch-items.contract';
import { FetchItemsDto } from '@shared/dtos';

import { ChallengeDto } from '../dtos/challenge.dto';
import { Prisma, PrismaService } from '../shared/prisma.service';

@Injectable()
export class ChallengeService {
  constructor(private prisma: PrismaService) {}
  /**
   * Get all challenges.
   *
   * @param options - The search options.
   * @returns A promise that resolves to the challenge list.
   */
  async fetchChallenges({
    search = '',
    // sortBy = 'name',
    // sortOrder = 'asc',
    page = 1,
    pageSize = 10,
  }: Partial<FetchItemsDtoReqBody>): Promise<FetchItemsDto<ChallengeDto>> {
    // const orderBy = { [sortBy]: sortOrder };
    const where = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      OR: [{ name: { contains: search, mode: 'insensitive' } }],
    } as Prisma.ChallengeWhereInput;

    const rawItems = await this.prisma.challenge.findMany({
      where,
      take: Number(pageSize),
      skip: Number((page - 1) * pageSize),
      include: { reward: true, location: true },
    });

    const items: ChallengeDto[] = rawItems.map((c) => ({
      id: c.id,
      name: c.name,
      type: c.type,
      target: c.target,
      reward: {
        point: c.reward.point,
        badge: c.reward.badge,
      },
      location: {
        name: c.location.name,
        coordinate: {
          latitude: c.location.latitude,
          longitude: c.location.longitude,
        },
      },
    }));

    const total = await this.prisma.challenge.count({ where });
    const totalPages = Math.ceil(total / pageSize);
    return {
      items,
      totalPages: totalPages === Infinity ? 1 : totalPages,
      pageIndex: Number(page),
      itemsPerPage: Number(pageSize),
    };
  }
  async findChallengeById(id: string): Promise<ChallengeDto> {
    const challenge = await this.prisma.challenge.findFirst({
      where: {
        id: id,
      },
      include: {
        reward: true,
        location: true,
      },
    });
    if (!challenge) {
      throw new NotFoundException({
        message: `Challenge ${id} was not found`,
      });
    }

    return {
      id: challenge.id,
      name: challenge.name,
      type: challenge.type,
      target: challenge.target,
      reward: {
        point: challenge.reward.point,
        badge: challenge.reward.badge,
      },
      location: {
        name: challenge.location.name,
        coordinate: {
          latitude: challenge.location.latitude,
          longitude: challenge.location.longitude,
        },
      },
    };
  }
}
