import { Injectable, NotFoundException } from '@nestjs/common';
import { FetchItemsDtoReqBody } from '@shared/contracts/fetch-items.contract';
import { FetchItemsDto } from '@shared/dtos';
import { getDistance } from '@shared/utilities';
import { Prisma, PrismaService } from '../shared/prisma.service';
import { ChallengeDto, CreateChallengeDto } from '@shared/contracts';

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
    userLat = 0,
    userLng = 0,
  }: Partial<FetchItemsDtoReqBody>): Promise<FetchItemsDto<ChallengeDto>> {
    // const orderBy = { [sortBy]: sortOrder };
    const where = {
      OR: [{ name: { contains: search, mode: 'insensitive' } }],
    } as Prisma.ChallengeWhereInput;
    const rawItems = await this.prisma.challenge.findMany({
      where,
      take: Number(pageSize),
      skip: Number((page - 1) * pageSize),
      include: { badge: true },
    });
    const nearby =
      Number(userLat) !== 0 || Number(userLng) !== 0
        ? rawItems.filter((c) => {
            const dist = getDistance(userLat, userLng, c.latitude, c.longitude);
            return dist <= 3;
          })
        : rawItems;
    const items: ChallengeDto[] = nearby.map((c) => ({
      id: c.id,
      name: c.name,
      type: c.type,
      target: c.target,
      point: c.point,
      badge: c.badge?.name,
      location: {
        name: c.locationName,
        coordinate: {
          latitude: c.latitude,
          longitude: c.longitude,
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
        badge: true,
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
      point: challenge.point,
      badge: challenge.badge?.name,
      location: {
        name: challenge.locationName,
        coordinate: {
          latitude: challenge.latitude,
          longitude: challenge.longitude,
        },
      },
    };
  }
  async createChallenge(
    challengeBody: CreateChallengeDto,
  ): Promise<ChallengeDto> {
    const challenge = await this.prisma.challenge.create({
      data: {
        name: challengeBody.name,
        type: challengeBody.type,
        target: challengeBody.target,
        point: challengeBody.point,
        ...(challengeBody.badgeId && {
          badge: { connect: { id: challengeBody.badgeId } },
        }),
        locationName: challengeBody.location.name,
        latitude: challengeBody.location.coordinate.latitude,
        longitude: challengeBody.location.coordinate.longitude,
      },
      include: {
        badge: true,
      },
    });
    return {
      id: challenge.id,
      name: challenge.name,
      type: challenge.type,
      target: challenge.target,
      point: challenge.point,
      badge: challenge.badge?.name,
      location: {
        name: challenge.locationName,
        coordinate: {
          latitude: challenge.latitude,
          longitude: challenge.longitude,
        },
      },
    };
  }
}
