import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class UpdateDto {
  @ApiProperty()
  @IsNumberString()
  id: number;

  @ApiProperty({ required: false })
  building: string;

  @ApiProperty({ required: false })
  location_name: string;

  @ApiProperty({ required: false })
  location_number: string;

  @ApiProperty({ required: false })
  area: number;

  @ApiProperty({ required: false })
  path: string;
}
