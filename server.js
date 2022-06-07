const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.route"); // Imports routes
const app = express();

const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://OlegAntonov:Antonov_123@olegclaster.t6nr6.mongodb.net/?retryWrites=true&w=majority";
// let dev_db_url = "mongodb://OlegAntonov:Antonov_123@olegclaster.t6nr6.mongodb.net";

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB)
.then(() => console.log("Mongoose connect"))
.catch((err) => console.log("test ============>", err));
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

let port = 1234;

app.listen(port, () => {
  console.log("Server start on port", port);
});
