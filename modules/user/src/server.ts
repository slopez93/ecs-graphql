import "reflect-metadata";

import { buildFederatedSchema } from "@apollo/federation";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express, { json } from "express";
import cors from "cors";

import { resolvers, typeDefs } from "./graphql";
import { buildContext, GqlContext } from "./graphql/context";

const PORT = 3000;

const server = new ApolloServer<GqlContext>({
  schema: buildFederatedSchema({ typeDefs, resolvers }),
});

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

const app = express();

app.use("/pin", (_req, res) =>
  res.status(200).send({ message: "I'm healthy" })
);

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
