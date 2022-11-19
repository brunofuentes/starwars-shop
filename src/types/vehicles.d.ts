export type Vehicle = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: [];
  films: [];
  created: string;
  edited: string;
  url: string;
};

export type GetVehiclesResponse =
  | {
      data: vehiclesData;
      status: number;
    }
  | null
  | undefined
  | string;

export type vehiclesData =
  | {
      count: number;
      next: string | null;
      previous: string | null;
      results: Vehicle[];
    }
  | null
  | undefined;
