import {
  IsString,
  IsEnum,
  IsInt,
  Min,
  ValidateNested,
  IsNumber,
  IsOptional,
  IsUUID,
} from "class-validator";
import { Type } from "class-transformer";

import { ChallengeType } from "@prisma-client/habit";
import { ApiProperty } from "@nestjs/swagger";

class CoordinateDto {
  @ApiProperty()
  @IsInt()
  latitude: number;

  @ApiProperty()
  @IsInt()
  longitude: number;
}

class LocationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => CoordinateDto)
  @ApiProperty({ type: CoordinateDto })
  coordinate: CoordinateDto;
}
export class CreateChallengeDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ enum: ChallengeType, example: ChallengeType.walking })
  @IsEnum(ChallengeType)
  type: ChallengeType;

  @ApiProperty()
  @IsNumber()
  point: number;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsUUID()
  badgeId?: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  target: number;

  @ValidateNested()
  @Type(() => LocationDto)
  @ApiProperty({ type: LocationDto })
  location: LocationDto;
}

export class ChallengeDto extends CreateChallengeDto {
  @IsString()
  id: string;

  @IsString()
  badge?: string;
}
