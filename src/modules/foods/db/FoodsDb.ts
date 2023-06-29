import { inject, injectable } from "inversify";

import { AUTOMAPPER, AutoMapper } from "../../../shared/automapper";
import { FoodDto } from "../dtos/FoodDto";
import { Food } from "../models/Food";

@injectable()
export class FoodsDb {
  private readonly tableName = "Morcilla";
  private readonly foods: Food[] = [
    {
      id: "1",
      name: "Food 1",
      image:
        "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
    },
    {
      id: "2",
      name: "Food 2",
      image:
        "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
    },
    {
      id: "3",
      name: "Food 3",
      image:
        "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
    },
  ];

  constructor(@inject(AUTOMAPPER) private automapper: AutoMapper) {}

  public async getFoods(): Promise<Food[]> {
    const dbItem = this.foods;

    return this.automapper.mapper.mapArray(dbItem, FoodDto, Food);
  }

  public async getFood(foodId: string) {
    const dbItem = this.foods.find((food) => food.id === foodId);

    if (!dbItem) {
      return;
    }

    return this.automapper.mapper.map(dbItem, FoodDto, Food);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async create(_food: Food) {
    throw new Error("Not implemented");
  }
}

export const FOODS_DB = Symbol("FOODS_DB");
