import { mergeSchemas } from "@graphql-tools/schema";

import { baseSchema } from "./common";
import { foodsSchema } from "./foods";

export const schema = mergeSchemas({
  schemas: [baseSchema, foodsSchema],
});
