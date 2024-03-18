import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class CreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 10)
  building: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 20)
  location_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(1, 20)
  location_number: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  area: number;

  @ApiProperty()
  @IsNotEmpty()
  path: string;
}
