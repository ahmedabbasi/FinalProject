const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
var MONGODB_URI = "mongodb://heroku_rmkc1h02:v2qqkihmf9obj39k24anob59ou@ds217671.mlab.com:17671/heroku_rmkc1h02"

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newsreact");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
