import { IsOptional, IsString, IsInt, Min, ValidateIf } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

import { TransformNumber } from "../pipe/transform-number.pipe";

/**
 * Data Transfer Object for fetching items.
 */
export class FetchItemsDtoReqBody {
  /**
   * Optional search string to filter items by name or other attributes.
   */
  @ApiPropertyOptional({ description: "Search string to filter items" })
  @IsOptional()
  @ValidateIf((_, value) => Boolean(value))
  @IsString()
  search?: string;

  /**
   * Optional filter criteria to filter items by a specific attribute.
   */
  // @ApiPropertyOptional({ description: 'Filter attribute' })
  // @IsOptional()
  // @IsString()
  // filterBy?: string;

  /**
   * Page number for pagination. Defaults to 1.
   */
  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @TransformNumber()
  @IsInt()
  @Min(1)
  page = 1;

  /**
   * Page size for pagination. Defaults to 10 and must be between 1 and 100.
   */
  @ApiPropertyOptional({ default: 10 })
  @IsOptional()
  @TransformNumber()
  @IsInt()
  @Min(1)
  pageSize = 10;

  /**
   * User location latitude.
   */
  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @TransformNumber()
  @IsInt()
  @Min(0)
  userLat = 0;

  /**
   * User location longtitude.
   */
  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @TransformNumber()
  @IsInt()
  @Min(0)
  userLng = 0;
}
