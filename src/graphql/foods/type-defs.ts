import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    foods: [Food]
  }

  extend type Mutation {
    food(foodInput: CreateFoodInput!): Food
  }

  type Food {
    id: String
    name: String
    image: String
  }

  input CreateFoodInput {
    name: String!
    image: String!
  }
`;
