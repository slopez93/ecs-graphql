import { Request, Response } from "express";

import container from "../config/di";
import { FOODS_SERVICE, FoodsService } from "../modules/foods/services";

export interface GqlContext {
  services: {
    foodsService: FoodsService;
  };
}

export const buildContext = async ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<GqlContext> => {
  return {
    services: {
      foodsService: container.get<FoodsService>(FOODS_SERVICE),
    },
  };
};
