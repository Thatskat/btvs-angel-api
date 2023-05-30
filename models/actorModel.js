const mongoose = require("mongoose");
const joi = require("joi");

// JOI VALIDATION
function validate(actor) {
  const schema = joi.object({
    name: joi.string().min(2).max(30).required(),
    bio: joi.string().min(10).max(2500).required(),
    characterPlayed: joi
      .array()
      .items(joi.string().min(2).max(30))
      .min(1)
      .max(5)
      .required(),
    imdbProfile: joi
      .string()
      .pattern(new RegExp(`^https:\/\/www\.imdb\.com\/name\/nm[0-9]+\/?$`))
      .required(),
    profilePicture: joi
      .string()
      .pattern(
        new RegExp(
          '^https:\/\/m.media-amazon.com\/images\/M\/[A-Z0-9a-z_.@]+.jpg$'
        )
      )
      .required(),
    type: joi
      .array()
      .items(joi.string().min(3).max(30))
      .min(1)
      .max(3)
      .required(),
  });
  return schema.validate(actor);
}

const actorSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    trim: true,
    required: true,
    lowercase: true,
  },
  bio: {
    type: String,
    minlength: 10,
    maxlength: 2500,
    required: true,
    lowercase: true,
    trim: true,
  },
  characterPlayed: {
    type: Array,
    min: 1,
    max: 5,
    lowercase: true,
    required: true,
  },
  imdbProfile: {
    type: String,
    field: { $regex: "^https://www.imdb.com/name/nm[0-9]+/?$" },
    required: true,
    trim: true,
  },
  profilePicture: {
    type: String,
    field: {
      $regex:
        '^https:\/\/m.media-amazon.com\/images\/M\/[A-Z0-9a-z_.@]+.jpg$',
    },
    required: true,
    trim: true,
  },
  type: {
    type: Array,
    min: 1,
    max: 3,
    lowercase: true,
  },
});

const Actor = mongoose.model("CastCrew", actorSchema);

module.exports.actorSchema = actorSchema;
module.exports.Actor = Actor;
module.exports.validate = validate;
