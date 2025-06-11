import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDate,
} from 'class-validator';
import { UserDto as UserDtoShape } from '@shared/dtos';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto implements UserDtoShape {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  point: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  profilePicture?: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  createdAt!: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updatedAt!: Date;
}
