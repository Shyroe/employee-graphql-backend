require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers/EmployeeResolver");
//import connection db
require("./database/index");

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers: resolvers,
});

const app = express();
app.use(express.json());
app.use(cors());

server.start();
