import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReadService } from './read/read.service';
import { ResponseTemplate } from 'src/common/reponseTemplate';
import { LocationRes } from './response/response';
import { FindOneParams } from './dtos/getOne.dto';
import { CreateDto } from './dtos/create.dto';
import { UpdateService } from './update/update.service';
import { UpdateDto } from './dtos/update.dto';

@Controller('location')
export class LocationController {
  constructor(
    private readService: ReadService,
    private updateService: UpdateService,
  ) {}

  @Get()
  async getLocations(): Promise<ResponseTemplate<LocationRes>> {
    const response = await this.readService.getAll();
    return response;
  }

  @Get(':id')
  async getLocationDetail(
    @Param() params: FindOneParams,
  ): Promise<ResponseTemplate<LocationRes>> {
    const response = await this.readService.getDetail(params.id);
    return response;
  }

  @Post()
  async createLocation(
    @Body() createDto: CreateDto,
  ): Promise<ResponseTemplate<LocationRes>> {
    const response = await this.updateService.create(createDto);

    return response;
  }

  @Put()
  async updateLocation(
    @Body() updateDto: UpdateDto,
  ): Promise<ResponseTemplate<LocationRes>> {
    const response = await this.updateService.update(updateDto);

    return response;
  }

  @Delete(':id')
  async deleteLocation(
    @Param() idDto: FindOneParams,
  ): Promise<ResponseTemplate<string>> {
    const response = await this.updateService.delete(idDto.id);

    return response;
  }
}
