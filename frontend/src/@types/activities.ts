export interface Activities {
  id: number;
  title: string;
  occurs_at: Date;
  time: string;
  trip_id: number;
  done?: boolean
}