const mongoose = require("mongoose");

// define database connection string
const DB = "mongodb://127.0.0.1:27017/employee-review-system";

// check db connected or not
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
