import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '../shared/prisma.service';
import { UserDto } from '../dtos/user.dto';
import { FetchItemsDto } from '../dtos/fetch-items.dto';
import { FetchItemsDtoReqBody } from '@shared/contracts/fetch-items.contract';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  /**
   * Get all users.
   *
   * @param options - The search options.
   * @returns A promise that resolves to the user list.
   */
  async fetchUsers({
    search = '',
    // sortBy = 'name',
    // sortOrder = 'asc',
    page = 1,
    pageSize = 10,
  }: Partial<FetchItemsDtoReqBody>): Promise<FetchItemsDto<UserDto>> {
    // const orderBy = { [sortBy]: sortOrder };
    const where = {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      OR: [{ firstName: { contains: search, mode: 'insensitive' } }],
    } as Prisma.UserWhereInput;

    const items = (await this.prisma.user.findMany({
      where,
      skip: Number((page - 1) * pageSize),
      take: Number(pageSize),
    })) as UserDto[];

    const total = await this.prisma.user.count({ where });
    const totalPages = Math.ceil(total / pageSize);
    return {
      items,
      totalPages: totalPages === Infinity ? 1 : totalPages,
      pageIndex: Number(page),
      itemsPerPage: Number(pageSize),
    };
  }
}
