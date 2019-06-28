import { buildSchema } from 'graphql';

const schemaStr = `
  enum ColorCategory {
    PUBLIC
    LIKES
    PROFILE
    ANONYMOUS
  }

  type Color {
    id: ID!
    like: Int!
    color: String!
    userid: Int
    username: String
    createdate: String
  }

  type User {
    id: ID!
    img: String
    isadmin: Boolean
    name: String
    likes: [Int!]
  }

  input LikeColorInputType {
    id: ID!
    willLike: Boolean!
  }
  
  input CreateColorInputType {
    color: String!
  }

  type LikeColorOutputType {
    status: Int!
  }

  type AdjudicateColorOutputType {
    status: Int!
  }

  type CreateColorOutputType {
    status: Int!
    data: Int!
  }

  type AuthOutputType {
    user: User
    url: String
    authError: String
  }

  type Mutation {
    likeColor(input: LikeColorInputType!): LikeColorOutputType
    createColor(input: CreateColorInputType!): CreateColorOutputType
    adjudicateColor(input: LikeColorInputType!): AdjudicateColorOutputType
    logoff: AuthOutputType
  }
  
  type Query {
    color(category: ColorCategory!): [Color]
    auth: AuthOutputType
  }

  schema {
    query: Query
    mutation: Mutation
  } 
`;

const schema = buildSchema(schemaStr);
export default schema;