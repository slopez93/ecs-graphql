import { GqlContext } from "../context";
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
