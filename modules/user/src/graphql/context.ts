import { Request, Response } from "express";

import container from "../config/di";
import { USER_SERVICE, UserService } from "../services";

export interface GqlContext {
  services: {
    userService: UserService;
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
      userService: container.get<UserService>(USER_SERVICE),
    },
  };
};
