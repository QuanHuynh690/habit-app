import { Injectable, type OnModuleInit } from '@nestjs/common';
import { type User, Prisma, PrismaClient } from '@prisma-client/user';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}

export { type User, type PrismaClient, Prisma };
