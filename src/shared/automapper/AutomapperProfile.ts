import { MappingProfile } from "@automapper/core";

export interface AutomapperProfile {
  get profile(): MappingProfile;
}

export const AUTOMAPPER_PROFILE = Symbol("AUTOMAPPER_PROFILE");
