import type { Activities } from "./activities";
import type { Participant } from "./guests";
import type { Links } from "./links";

export interface Trip {
  id: number;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
  participants: Participant[];
  activities: Activities[];
  links: Links[];
}

export interface CreateParticipant {
  name: string
  email: string
  is_owner: boolean
}

export interface CreateTripInput {
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
  participants: CreateParticipant[]
}