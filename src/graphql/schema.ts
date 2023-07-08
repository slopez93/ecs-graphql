import { mergeSchemas } from "@graphql-tools/schema";

import { baseSchema } from "./common";

export const schema = mergeSchemas({
  schemas: [baseSchema],
});
