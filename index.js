// IMPORT EXPRESS MODULE
const express = require("express");
require("express-async-errors");
const app = express();

// IMPORT MONGOOSE MODULE
const mongoose = require("mongoose");

// IMPORT BODY PARSER MODULE
const bodyParser = require("body-parser");

// IMPORT HELMET MODULE
const helmet = require("helmet");

// IMPORT CORS
const cors = require("cors");

// IMPORT RATE LIMIT MODULE
const rateLimit = require("express-rate-limit");

// RATE LIMITS
const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
});

// STORE CONFIG IN ENV VAR
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require("config");

// GET DATA FROM CONFIG
const serverPort = config.get("port");

// MIDDLEWARE
const error = require("./middleware/error");

// USE MIDDLEWARE
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(limiter);

// ROUTES
const buffy = require("./routes/buffy");
const angel = require("./routes/angel");
const actor = require("./routes/actors");
const director = require("./routes/directors");
const writer = require("./routes/writers");

// USE ERROR MIDDLEWARE
app.use(error);

// CONNECT TO MONGODB DATABASE
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.dgzgulx.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connection to the database has been successful"))
  .catch((err) =>
    console.log(
      "An error has occurred when trying to connect to the database: ",
      err
    )
  );

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// USE PUBLIC FOLDER
app.use(express.static(__dirname + "/public"));

// ROUTES
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  res.sendFile(__dirname + "/css/styles.css");
});
app.use("/api/buffy", buffy);
app.use("/api/angel", angel);
app.use("/api/actors", actor);
app.use("/api/directors", director);
app.use("/api/writers", writer);

// ESTABLISH API PORT
const port = process.env.PORT || serverPort;
app.listen(port, () => {
  console.log(`This API application is currently running on Port ${port}`);
});
