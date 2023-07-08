import { inject, injectable } from "inversify";

import { randomUuuid } from "../shared/uuid";
import { USER_DB, UserDb } from "../db/UserDb";
import { CreateUserDto } from "../dtos/CreateUserDto";
import { User } from "../models/User";

@injectable()
export class UserService {
  constructor(@inject(USER_DB) private userDb: UserDb) {}

  public async getUsers() {
    const foods = await this.userDb.getUsers();
    return foods;
  }

  public async getUser(userId: string) {
    return await this.userDb.getUser(userId);
  }

  public async addUser({ username }: CreateUserDto): Promise<User> {
    const users = await this.userDb.getUsers();

    const existUsername = users.find((it) => it.username === username);

    if (existUsername) {
      throw new Error("Username already exist");
    }

    const id = randomUuuid();

    const user: User = { id, username };

    await this.userDb.create(user);

    return user;
  }
}

export const USER_SERVICE = Symbol("USER_SERVICE");
