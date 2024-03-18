import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseTemplate } from 'src/common/reponseTemplate';
import { Location } from 'src/config/database/entities/location.entity';
import { Repository } from 'typeorm';
import { LocationRes } from '../response/response';

@Injectable()
export class ReadService {
  private readonly logger = new Logger(ReadService.name);

  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  async getAll(): Promise<ResponseTemplate<LocationRes>> {
    try {
      const listLocation: Location[] = await this.locationRepository.find({
        select: ['id', 'building', 'location_name', 'location_number', 'path'],
      });

      const response = new ResponseTemplate(200, 'Success', listLocation);
      return response;
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }

  async getDetail(id: number): Promise<ResponseTemplate<LocationRes>> {
    try {
      const location: Location = await this.locationRepository.findOne({
        where: { id: id },
        select: ['id', 'building', 'location_name', 'location_number', 'path'],
      });

      const response = new ResponseTemplate(200, 'Success', location);
      return response;
    } catch (error) {
      this.logger.error(error.message, error.stack);
      throw error;
    }
  }
}
