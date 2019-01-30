import { GraphQLServer } from "graphql-yoga";

// Scalar Types - String, Boolean, Int, Float, ID

// Type definition schemas
const typeDefs = `
  type Query {
    id : ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
  }
`;

// Resolvers
const resolvers = {
  Query: {
    id() {
      return "abc123";
    },
    name() {
      return "tkHWANG";
    },
    age() {
      return 27;
    },
    employed() {
      return false;
    },
    gpa() {
      return 3.17;
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("[+] The server is up.");
});
