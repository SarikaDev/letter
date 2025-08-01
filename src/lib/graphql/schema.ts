import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Chat {
    id: ID!
    name: String!
    lastMessage: String
  }

  type Message {
    id: ID!
    text: String!
    sender: String!
  }

  type Query {
    chats: [Chat!]!
  }

  type Mutation {
    sendMessage(chatId: ID!, text: String!): Message!
  }
`;
