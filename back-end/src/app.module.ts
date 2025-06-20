import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TripsModule } from './trips/trips.module';
import { ActivitiesModule } from './activities/activities.module';
import { LinksModule } from './links/links.module';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [PrismaModule, TripsModule, ActivitiesModule, LinksModule, ParticipantsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
