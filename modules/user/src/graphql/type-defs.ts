import { gql } from "apollo-server";


export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    username: String!
  }

  extend type Query {
    user(id: String!): User
    users: [User]
  }

  extend type Mutation {
    user(userInput: CreateUserInput!): User
  }

  input CreateUserInput {
    username: String!
  }
`;
