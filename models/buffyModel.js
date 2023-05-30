const mongoose = require("mongoose");
const { episodeSchema } = require("./schema/episodeSchema");

// EPISODE MODEL
const Episode = mongoose.model("BuffyEpisodes", episodeSchema);

// EXPORT JOI VALIDATION, EPISODE SCHEME AND EPISODE MODEL
module.exports.episodeSchema = episodeSchema;
module.exports.Episode = Episode;
