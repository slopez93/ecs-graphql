import {
  createMap,
  forMember,
  mapFrom,
  Mapper,
  MappingProfile,
} from "@automapper/core";
import { injectable } from "inversify";

import { AutomapperProfile } from "../shared/automapper/AutomapperProfile";
import { UserDto } from "../dtos/UserDto";
import { User } from "../models/User";

@injectable()
export class UserProfile implements AutomapperProfile {
  public get profile(): MappingProfile {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        User,
        UserDto,
        forMember(
          (destination) => destination.id,
          mapFrom((source) => source.id)
        ),
        forMember(
          (destination) => destination.username,
          mapFrom((source) => source.username)
        )
      );

      createMap(
        mapper,
        UserDto,
        User,
        forMember(
          (destination) => destination.id,
          mapFrom((source) => source.id)
        ),
        forMember(
          (destination) => destination.username,
          mapFrom((source) => source.username)
        )
      );
    };
  }
}
