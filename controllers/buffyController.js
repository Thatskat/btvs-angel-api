const { Episode } = require("../models/buffyModel");
const { validate } = require("../models/schema/episodeSchema");

module.exports = {
  // GET ALL BUFFY EPISODES
  async getAllBuffyEpisodes(req, res) {
    try {
      const episodes = await Episode.find({})
        .sort({ seasonNumber: 1, episodeNumber: 1 })
        .populate({ path: "director", select: ["name", "profilePicture"] })
        .populate({ path: "writer", select: ["name", "profilePicture"] })
        .populate({
          path: "episodeCast",
          select: ["name", "characterPlayed", "profilePicture"],
        });
      if (!episodes) {
        return res
          .status(400)
          .send("No Buffy the Vampire Slayer episodes in the database.");
      }
      res.send(episodes);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET BUFFY EPISODES BY SEASON
  async getBuffyEpisodesBySeason(req, res) {
    try {
      const season = req.params.season;
      const episodes = await Episode.find({ seasonNumber: season })
        .sort({ episodeNumber: 1 })
        .populate({ path: "director", select: ["name", "profilePicture"] })
        .populate({ path: "writer", select: ["name", "profilePicture"] })
        .populate({
          path: "episodeCast",
          select: ["name", "characterPlayed", "profilePicture"],
        });
      if (!episodes) {
        return res
          .status(404)
          .send(
            "No Buffy the Vampire Slayer episodes could be found within that requested season. Please remember that there are only 7 seasons of Buffy the Vampire Slayer."
          );
      }
      res.send(episodes);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET BUFFY EPISODE BY SEASON AND EPISODE NUMBER
  async getBuffyEpisode(req, res) {
    try {
      const season = req.params.season;
      const epNumb = req.params.episode;
      const episode = await Episode.find({
        seasonNumber: season,
        episodeNumber: epNumb,
      })
        .populate({ path: "director", select: ["name", "profilePicture"] })
        .populate({ path: "writer", select: ["name", "profilePicture"] })
        .populate({
          path: "episodeCast",
          select: ["name", "characterPlayed", "profilePicture"],
        });
      if (!episode) {
        return res
          .status(400)
          .send(
            `Buffy the Vampire Slayer season ${season} episode ${epNumb} could not be found.`
          );
      }
      res.send(episode);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET BUFFY EPISODE BY ID
  async getBuffyEpisodeById(req, res) {
    try {
      const id = req.params.id;
      const episode = await Episode.findById(id)
        .populate({ path: "director", select: ["name", "profilePicture"] })
        .populate({ path: "writer", select: ["name", "profilePicture"] })
        .populate({
          path: "episodeCast",
          select: ["name", "characterPlayed", "profilePicture"],
        });
      if (!episode) {
        return res
          .status(404)
          .send(
            "The Buffy the Vampire Slayer episode with that corresponding ID could not be found."
          );
      }
      res.send(episode);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // POST - ADD A BUFFY EPISODE
  async postEpisode(req, res) {
    const { error } = validate(req.body);
    if (error) {
      return res
        .status(400)
        .send(
          "All episode details are required. Please try again. " +
            error.details[0].message
        );
    }
    try {
      let episode = new Episode({
        episodeName: req.body.episodeName,
        seasonNumber: req.body.seasonNumber,
        episodeNumber: req.body.episodeNumber,
        hasAired: req.body.hasAired,
        airDate: req.body.airDate,
        description: req.body.description,
        director: req.body.director,
        writer: req.body.writer,
        trivia: req.body.trivia,
        episodeCast: req.body.episodeCast,
        episodeScreenshot: req.body.episodeScreenshot,
        imdbLink: req.body.imdbLink,
      });
      episode = await episode.save();
      res.send(
        `New Episode "${req.body.episodeName}" has been successfully added.`
      );
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // PUT - EDIT A BUFFY EPISODE BY ID
  async putBuffyEpisodeById(req, res) {
    try {
      const { error } = validate(req.body);
      if (error) {
        return res.status(400).send(error);
      }
      const episode = await Episode.findByIdAndUpdate(
        req.params.id,
        {
          episodeName: req.body.episodeName,
          seasonNumber: req.body.seasonNumber,
          episodeNumber: req.body.episodeNumber,
          hasAired: req.body.hasAired,
          airDate: req.body.airDate,
          description: req.body.description,
          director: req.body.director,
          writer: req.body.writer,
          trivia: req.body.trivia,
          episodeCast: req.body.episodeCast,
          episodeScreenshot: req.body.episodeScreenshot,
          imdbLink: req.body.imdbLink,
        },
        { new: true }
      );
      if (!episode) {
        return res
          .status(404)
          .send(
            "The Buffy the Vampire Slayer episode with a matching ID could not be found. Please try again."
          );
      }
      res
        .status(200)
        .send(
          `Buffy the Vampire Slayer Episode '${req.body.episodeName}' has been successfully updated. ` +
            episode
        );
    } catch (err) {
      res.status(400).send(err);
    }
  },
    // DELETE - DELETE AN BUFFY EPISODE BY ID
    async deleteBuffyEpisode(req, res) {
      try {
        const episode = await Episode.findByIdAndRemove(req.params.id);
        if (!episode) {
          return res
            .status(404)
            .send(
              "The Buffy the Vampire Slayer episode with that corresponding ID could not be found. Please try again."
            );
        }
        res
          .status(200)
          .send(
            `Buffy the Vampire Slayer episode '${episode.episodeName}' has been successfully deleted from the database.`
          );
      } catch (err) {
        res.status(400).send(err)
      }
    },
};
