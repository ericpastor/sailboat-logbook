export interface SailboatSpecifications {
    lengthOverall: number; // meters
    lengthWaterline: number; // meters
    beam: number; // meters
    draft: number; // meters
    displacement: number; // kg
    ballast: number; // kg
    sailArea: number; // square meters
    mastHeight: {
      main: number; // meters
      mizzen: number; // meters
    };
    engine: string;
    fuelCapacity: number; // liters
    freshWaterCapacity: number; // liters
    cabins: number;
    berths: number;
    rigType: string;
    designer: string;
    builder: string;
  }
  