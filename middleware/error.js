const winston = require("winston");
require("winston-mongodb");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "Buffy-Angel-API" },
  transports: [
    new winston.transports.File({
      filename: "/logs/error.log",
      level: "error",
    }).timestamp(),
    new winston.transports.File({
      filename: "/logs/warnings.log",
      level: "warn",
    }).timestamp(),
    new winston.transports.File({ filename: "/logs/combined.log" }).timestamp(),
    new winston.transports.MongoDB({
      db: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.dgzgulx.mongodb.net/?retryWrites=true&w=majority`,
    }).timestamp(),
  ],
});

// LOGGING OF EXPRESS ERRORS
function error(err, req, res, next) {
  logger.error(err.message, err);
  res.status(500).send("An error has occurred.");
}

// LOGGING ON UNCAUGHT SYNC EXCEPTION
process.on("uncaughtException", (ex) => {
  console.log(ex);
  logger.error(ex.message, ex);
  process.exit(1);
});

// LOGGING ON UNCAUGHT ASYNC EXCEPTION
process.on("unhandledRejection", (ex) => {
  console.log("An uncaught rejection has occurred.");
  logger.error(ex.message, ex);
});

module.exports = error;
