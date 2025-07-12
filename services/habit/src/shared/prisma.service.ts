import { Injectable, type OnModuleInit } from '@nestjs/common';
import { type Challenge, Prisma, PrismaClient } from '@prisma-client/habit';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}

export { type Challenge, type PrismaClient, Prisma };
