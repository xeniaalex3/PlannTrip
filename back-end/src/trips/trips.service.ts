import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Trips, Prisma } from '@prisma/client';

@Injectable()
export class TripsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Trips[]> {
    return this.prisma.trips.findMany();
  }

  async findOne(id: number): Promise<Trips | null> {
    return this.prisma.trips.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.TripsCreateInput): Promise<Trips> {
    return this.prisma.trips.create({ data });
  }

  async update(id: number, data: Prisma.TripsUpdateInput): Promise<Trips> {
    return this.prisma.trips.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Trips> {
    return this.prisma.trips.delete({
      where: { id },
    });
  }
}
