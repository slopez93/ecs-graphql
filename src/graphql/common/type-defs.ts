import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type CustomType {
    id: String
    name: String
    url: String
  }
`;
