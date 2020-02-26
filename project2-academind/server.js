const express = require('express');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`

type RootQuery{
    events: [String!]!
}

type RootMutation {
    createEvent(name: String): String
}
schema{
    query: RootQuery
    mutation: RootMutation
}
`);

const rootValue = {
  events: () => {
    return ['1', '2', '3'];
  },
  createEvent: args => {
    const eventName = args.name;
    return eventName;
  }
};

app.use(
  '/graphql',
  graphqlHttp({
    schema: schema,
    rootValue, //all resolvers, name have to match to Schema
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log('Listening at port 5000');
});
