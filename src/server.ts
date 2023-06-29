import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";
import cors from "cors";
import express from "express";

import { buildContext, GqlContext } from "./graphql/context";
import { schema } from "./graphql/schema";

const PORT = 3000;

const server = new ApolloServer<GqlContext>({
  schema,
});

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

const app = express();
app.use(
  "/graphql",
  cors(),
  json(),
  expressMiddleware(server, {
    context: buildContext,
  })
);

app.listen(PORT);
console.log(`🚀 Server ready at port ${PORT}`);
