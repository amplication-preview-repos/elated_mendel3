import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  listingPrice: number | null;
  name: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
