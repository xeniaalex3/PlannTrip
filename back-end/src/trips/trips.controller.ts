import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Prisma, Trips } from '@prisma/client';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  async findAll(): Promise<Trips[]> {
    return this.tripsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Trips | null> {
    return this.tripsService.findOne(+id);
  }

  @Post()
  async create(@Body() createTripDto: CreateTripDto): Promise<Trips> {
    const data: Prisma.TripsCreateInput = {
      destination: createTripDto.destination,
      starts_at: createTripDto.starts_at,
      ends_at: createTripDto.ends_at,
      is_confirmed: createTripDto.is_confirmed ?? false,
    };
    return this.tripsService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTripDto: UpdateTripDto,
  ): Promise<Trips> {
    const data: Prisma.TripsUpdateInput = {
      destination: updateTripDto.destination,
      starts_at: updateTripDto.starts_at,
      ends_at: updateTripDto.ends_at,
      is_confirmed: updateTripDto.is_confirmed,
    };
    return this.tripsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Trips> {
    return this.tripsService.remove(+id);
  }
}
