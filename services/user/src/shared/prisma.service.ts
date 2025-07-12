import { Injectable, type OnModuleInit } from '@nestjs/common';
import { type User, Prisma, PrismaClient } from '@prisma-client/user';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}

export { type User, type PrismaClient, Prisma };
