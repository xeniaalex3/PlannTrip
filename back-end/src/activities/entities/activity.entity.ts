import { Trip } from 'src/trips/entities/trip.entity';

export class Activity {
  id: string;
  title: string;
  occurs_at: Date;
  trip_id: string;
  trips: Trip;
}
