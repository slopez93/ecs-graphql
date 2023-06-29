import { makeExecutableSchema, mergeSchemas } from "@graphql-tools/schema";
import {
  resolvers as scalarResolvers,
  typeDefs as scalarTypeDefs,
} from "graphql-scalars";

import { typeDefs } from "./type-defs";

export const schema = mergeSchemas({
  schemas: [
    makeExecutableSchema({
      typeDefs: scalarTypeDefs,
      resolvers: scalarResolvers,
    }),
    makeExecutableSchema({ typeDefs }),
  ],
});
