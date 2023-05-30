const mongoose = require("mongoose");
const { episodeSchema } = require("./schema/episodeSchema");

// EPISODE MODEL
const Episode = mongoose.model("AngelEpisodes", episodeSchema);

// EXPORT JOI VALIDATION, EPISODE SCHEME AND EPISODE MODEL
module.exports.Episode = Episode;