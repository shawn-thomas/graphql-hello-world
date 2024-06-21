import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { start } from "repl";

const typeDefs = `#graphql
  type Query {
    greeting: String
  }
`;

function rngGreeting(namesArr) {
  const selectedName = namesArr[Math.floor(Math.random() * namesArr.length)];
  return `Hello ${selectedName}`;
}

const resolvers = {
  Query: {
    greeting: () => rngGreeting(["John", "Marla", "Susan", "Lian", "Miss Fu"]),
  },
};

async function startServer() {
  try {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, { listen: { port: 9002 } });
    console.log(`Server running at ${url}`);
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
