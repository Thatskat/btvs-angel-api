// IMPORT EXPRESS MODULE
const express = require("express");
const app = express();
// IMPORT MONGOOSE MODULE
const mongoose = require("mongoose");
// IMPORT BODY PARSER MODULE
const bodyParser = require('body-parser');
// IMPORT HELMET MODULE
const helmet = require('helmet');
// STORE CONFIG IN ENV VAR
process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const config = require('config');
// GET DATA FROM CONFIG
const serverPort = config.get("port");
// MIDDLEWARE
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
// ROUTES
const buffy = require("./routes/buffy");
const angel = require("./routes/angel");
const actor = require("./routes/actors");
const director = require("./routes/directors");
const writer = require("./routes/writers");

// CONNECT TO MONGODB DATABASE
mongoose.connect(`mongodb+srv://katrinafgill:hNHwyVvQNiwT6zU4@buffyversecluster.dgzgulx.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log("Connection to the database has been successful")).catch((err) => console.log("An error has occurred when trying to connect to the database: ", err));

// ROUTES
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
