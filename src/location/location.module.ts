import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { ReadService } from './read/read.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from 'src/config/database/entities/location.entity';
import { UpdateService } from './update/update.service';

@Module({
  controllers: [LocationController],
  providers: [ReadService, UpdateService],
  imports: [TypeOrmModule.forFeature([Location])],
})
export class LocationModule {}
