import { GqlContext } from "./context";
import { GetUserInput } from "./inputs/createUserInput";

export const resolvers = {
  Query: {
    async users(
      _root: void,
      _args: void,
      { services: { userService } }: GqlContext
    ) {
      try {
        return await userService.getUsers();
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    async user(
      root: void,
      { id }: GetUserInput,
      { services: { userService } }: GqlContext
    ) {
      try {
        return await userService.getUser(id);
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
  User: {
    __resolveReference: async (
      ref: { id: string },
      { services: { userService } }: GqlContext
    ) => {
      return await userService.getUser(ref.id);
    },
  },
};
