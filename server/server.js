const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

mongoose.connect(
  "",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: false
  }
);
mongoose.connection.once("open", () => {
  console.log("Database connected");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("Listening for requests on port 5000");
});
