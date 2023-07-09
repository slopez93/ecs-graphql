import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express, { json } from "express";

const PORT = 80;

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: "users",
      url: "http://internal-ecs-graphql-internal-alb-880042347.eu-west-1.elb.amazonaws.com:3000/graphql",
    },
    {
      name: "foods",
      url: "http://internal-ecs-graphql-internal-alb-880042347.eu-west-1.elb.amazonaws.com:3001/graphql",
    },
  ],
});

const server = new ApolloServer({ gateway });

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

const app = express();

app.use("/pin", (_req, res) =>
  res.status(200).send({ message: "I'm healthy" })
);

app.use("/graphql", cors(), json(), expressMiddleware(server));

app.listen(PORT);
console.log(`🚀 Server ready at port ${PORT}`);
