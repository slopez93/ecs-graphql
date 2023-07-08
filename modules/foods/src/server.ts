import "reflect-metadata";

import { buildFederatedSchema } from "@apollo/federation";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import express, { json } from "express";

import { resolvers, typeDefs } from "./graphql";
import { buildContext, GqlContext } from "./graphql/context";
import cors from "cors";

const PORT = 3001;

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
