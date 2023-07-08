import { gql } from "apollo-server";

export const typeDefs = gql`
  type Food {
    id: ID!
    name: String
    image: String
    creator: User
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    foods: [Food]
  }

  input CreateFoodInput {
    name: String!
    image: String!
  }

  extend type Query {
    foods: [Food]
  }

  extend type Mutation {
    food(foodInput: CreateFoodInput!): Food
  }
`;
