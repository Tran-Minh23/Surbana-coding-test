import { UpdateDto } from './../dtos/update.dto';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseTemplate } from 'src/common/reponseTemplate';
import { Location } from 'src/config/database/entities/location.entity';
import { Repository } from 'typeorm';
import { LocationRes } from '../response/response';
import { CreateDto } from '../dtos/create.dto';

@Injectable()
export class UpdateService {
  private readonly logger = new Logger(UpdateService.name);

  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async create(createDto: CreateDto): Promise<ResponseTemplate<LocationRes>> {
    let location = this.locationRepository.create();

    location = {
      ...location,
      ...createDto,
    };

    await this.locationRepository.insert(location);

    const response = new ResponseTemplate(201, 'Success', location);
    return response;
  }

  async update(updateDto: UpdateDto): Promise<ResponseTemplate<LocationRes>> {
    let currentLocation = await this.locationRepository.findOne({
      where: { id: updateDto.id },
    });

    if (!currentLocation) {
      throw new HttpException('Invalid location id', HttpStatus.BAD_REQUEST);
    }

    await this.locationRepository.update({ id: updateDto.id }, updateDto);

    currentLocation = {
      ...currentLocation,
      ...updateDto,
    };

    const response = new ResponseTemplate(200, 'Success', currentLocation);
    return response;
  }

  async delete(id: number): Promise<ResponseTemplate<string>> {
    try {
      const currentLocation = await this.locationRepository.findOne({
        where: { id: id },
      });

      if (!currentLocation) {
        throw new HttpException('Invalid location id', HttpStatus.BAD_REQUEST);
      }

      await this.locationRepository.delete({ id: id });

      const response = new ResponseTemplate(200, 'Success', '');
      return response;
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }
}
