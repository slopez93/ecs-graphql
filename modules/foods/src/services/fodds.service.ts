import { inject, injectable } from "inversify";

import { randomUuuid } from "../shared/uuid";
import { FOODS_DB, FoodsDb } from "../db/FoodsDb";
import { CreateFoodDto } from "../dtos/CreateFoodDto";
import { Food } from "../models/Food";

@injectable()
export class FoodsService {
  constructor(@inject(FOODS_DB) private foodsDb: FoodsDb) {}

  public async getFoods() {
    return await this.foodsDb.getFoods();
  }

  public async getFoodsByUser(userId: string): Promise<Food[]> {
    return await this.foodsDb.getFoodsByUser(userId);
  }

  public async addFood({ name, image }: CreateFoodDto): Promise<Food> {
    const foods = await this.foodsDb.getFoods();

    const existFood = foods.find((it) => it.name === name);

    if (existFood) {
      throw new Error("Food already exist");
    }

    const id = randomUuuid();

    const food: Food = { id, userId: "2", name, image };

    await this.foodsDb.create(food);

    return food;
  }
}

export const FOODS_SERVICE = Symbol("FOODS_SERVICE");
