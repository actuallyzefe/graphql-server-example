import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./index.js ";

const MONGO_URI = "mongodb://localhost:27017/yourDatabase";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`🚀 Server ready at: ${url}`);
