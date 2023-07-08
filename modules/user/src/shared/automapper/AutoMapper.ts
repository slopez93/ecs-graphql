import { classes } from "@automapper/classes";
import { addProfile, createMapper, Mapper } from "@automapper/core";
import { injectable, multiInject } from "inversify";
import { AutomapperProfile, AUTOMAPPER_PROFILE } from "./AutomapperProfile";

@injectable()
export class AutoMapper {
  public mapper: Mapper;

  constructor(@multiInject(AUTOMAPPER_PROFILE) profiles: AutomapperProfile[]) {
    this.mapper = createMapper({
      strategyInitializer: classes(),
    });

    profiles.forEach((profile) => {
      addProfile(this.mapper, profile.profile);
    });
  }
}

export const AUTOMAPPER = Symbol("AUTOMAPPER");
