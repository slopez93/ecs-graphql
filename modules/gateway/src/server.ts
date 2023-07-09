import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "users", url: "http://localhost:3000/graphql" },
    { name: "foods", url: "http://localhost:3001/graphql" },
  ],
});

const server = new ApolloServer({ gateway });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
