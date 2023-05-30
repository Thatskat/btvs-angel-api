const mongoose = require('mongoose');
const joi = require("joi");

// JOI VALIDATION
function validate(episode) {
    const schema = joi.object({
      episodeName: joi.string().min(3).max(250).required(),
      seasonNumber: joi.number().integer().min(1).max(7).required(),
      episodeNumber: joi.number().integer().min(1).max(22).required(),
      hasAired: joi.boolean().required(),
      airDate: joi.string().required(),
      description: joi.string().min(10).max(900).required(),
      director: joi.array().items(joi.string().min(3).max(50)).min(1).required(),
      writer: joi.array().items(joi.string().min(3).max(50)).min(1).required(),
      trivia: joi.string().min(10).max(2000),
      episodeCast: joi
        .array()
        .items(joi.string().min(3).max(50))
        .min(3)
        .max(16)
        .required(),
      episodeScreenshot: joi
        .string()
        .pattern(
          new RegExp(
            "^https://m.media-amazon.com/images/M/[A-Za-z0-9]+@.?_?[A-Za-z0-9_]+.(jpg)$"
          )
        )
        .required(),
      imdbLink: joi
        .string()
        .pattern(new RegExp(`^https:\/\/www\.imdb\.com\/title\/tt[0-9]+\/?$`))
        .required(),
    });
    return schema.validate(episode);
  }
  // EPISODE SCHEMA
  const episodeSchema = mongoose.Schema({
    episodeName: {
      type: String,
      minlength: 3,
      maxlength: 250,
      lowercase: true,
      required: true,
    },
    seasonNumber: { type: Number, min: 1, max: 7, required: true, maxlength: 1 },
    episodeNumber: {
      type: Number,
      min: 1,
      max: 22,
      required: true,
      minlength: 1,
      maxlength: 2,
    },
    hasAired: {
      type: Boolean,
      required: true,
    },
    airDate: {
      type: String,
      lowercase: true,
      required: true,
    },
    description: {
      type: String,
      minlength: 10,
      maxlength: 900,
      lowercase: true,
      trim: true,
      required: true,
    },
    director: { type: [mongoose.Schema.Types.ObjectId], ref: "CastCrew" },
    writer: { type: [mongoose.Schema.Types.ObjectId], ref: "CastCrew" },
    trivia: {
      type: String,
      minlength: 10,
      maxlength: 2000,
      lowercase: true,
    },
    episodeCast: { type: [mongoose.Schema.Types.ObjectId], ref: "CastCrew" },
    episodeScreenshot: {
      type: String,
      field: {
        $regex:
          "^https://m.media-amazon.com/images/M/[A-Za-z0-9]+@.?_?[A-Za-z0-9_]+.(jpg)$",
      },
      required: true,
      trim: true,
    },
    imdbLink: {
      type: String,
      field: { $regex: "^https://www.imdb.com/title/tt[0-9]+/?$" },
      required: true,
      trim: true,
    },
  });

module.exports.validate = validate;
module.exports.episodeSchema = episodeSchema;
