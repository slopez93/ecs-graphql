import { inject, injectable } from "inversify";

import { AUTOMAPPER, AutoMapper } from "../shared/automapper";

import { User } from "../models/User";
import { UserDto } from "../dtos/UserDto";

@injectable()
export class UserDb {
  private readonly tableName = "Morcilla";
  private readonly users: User[] = [
    {
      id: "1",
      username: "User 1",
    },
    {
      id: "2",
      username: "User 2",
    },
    {
      id: "3",
      username: "User 3",
    },
  ];

  constructor(@inject(AUTOMAPPER) private automapper: AutoMapper) {}

  public async getUsers(): Promise<User[]> {
    const dbItem = this.users;

    return this.automapper.mapper.mapArray(dbItem, UserDto, User);
  }

  public async getUser(userId: string) {
    const dbItem = this.users.find((user) => user.id === userId);

    if (!dbItem) {
      return;
    }

    return this.automapper.mapper.map(dbItem, UserDto, User);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async create(_user: User) {
    throw new Error("Not implemented");
  }
}

export const USER_DB = Symbol("USER_DB");
