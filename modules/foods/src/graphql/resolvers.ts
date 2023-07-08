import { GqlContext } from "./context";
import { CreateFoodInput } from "./inputs/createFoodInput";

export const resolvers = {
  Query: {
    async foods(
      _root: void,
      _args: void,
      { services: { foodsService } }: GqlContext
    ) {
      try {
        return await foodsService.getFoods();
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
  Food: {
    creator: (food: any) => {
      return {
        __typename: "User",
        id: food.userId,
      };
    },
  },
  User: {
    foods: async (
      user: { id: string },
      _args: void,
      { services: { foodsService } }: GqlContext
    ) => {
      return await foodsService.getFoodsByUser(user.id);
    },
  },
  Mutation: {
    async food(
      root: void,
      { foodInput: { name, image } }: CreateFoodInput,
      { services: { foodsService } }: GqlContext
    ) {
      try {
        return await foodsService.addFood({ name, image });
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
  },
};
