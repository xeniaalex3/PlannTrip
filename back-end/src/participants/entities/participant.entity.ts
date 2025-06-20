import { Trip } from 'src/trips/entities/trip.entity';

export class Participant {
  id: string;
  name: string;
  email: string;
  is_confirmed: boolean;
  is_owner: boolean;
  trip_id: string;
  trips: Trip;
}
