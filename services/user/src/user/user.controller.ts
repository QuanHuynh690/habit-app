import { Controller, Get, Query, Version } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { FetchItemsDtoReqBody } from '@shared/contracts/fetch-items.contract';

import { UserService } from './user.service';
import { UserDto } from '../dtos/user.dto';
import { FetchItemsDto } from '@shared/dtos';

@ApiTags('Users')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Get all user.
   *
   * @returns A promise that resolves to an array of UserDto objects.
   *
   */
  @Get('users')
  @Version('1')
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'search', required: false, type: String })
  async findAll(
    @Query() query: FetchItemsDtoReqBody,
  ): Promise<FetchItemsDto<UserDto>> {
    return await this.userService.fetchUsers(query);
  }
}
