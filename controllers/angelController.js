const { Episode } = require("../models/angelModel");
const { validate } = require("../models/schema/episodeSchema");

module.exports = {
  // GET ALL ANGEL EPISODES
  async getAllAngelEpisodes(req, res) {
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
        return res.status(400).send("No Angel episodes in the database.");
      }
      res.send(episodes);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET ANGEL EPISODES BY SEASON
  async getAngelEpisodesBySeason(req, res) {
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
            "No Angel episodes could be found within that requested season. Please remember that there are only 5 seasons of Angel."
          );
      }
      res.send(episodes);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET ANGEL EPISODE BY SEASON AND EPISODE NUMBER
  async getAngelEpisode(req, res) {
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
          .send(`Angel season ${season} episode ${epNumb} could not be found.`);
      }
      res.send(episode);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET ANGEL EPISODE BY ID
  async getAngelEpisodeById(req, res) {
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
            "The Angel episode with that corresponding ID could not be found."
          );
      }
      res.send(episode);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // POST - ADD ANGEL EPISODE
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
  // PUT - EDIT ANGEL EPISODE BY ID
  async putAngelEpisodeById(req, res) {
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
            "The Angel episode with a matching ID could not be found. Please try again."
          );
      }
      res
        .status(200)
        .send(
          `Angel Episode '${req.body.episodeName}' has been successfully updated.` +
            episode
        );
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // DELETE - DELETE AN ANGEL EPISODE BY ID
  async deleteAngelEpisode(req, res) {
    try {
      const episode = await Episode.findByIdAndRemove(req.params.id);
      if (!episode) {
        return res
          .status(404)
          .send(
            "The Angel episode with that corresponding ID could not be found. Please try again."
          );
      }
      res
        .status(200)
        .send(
          `Angel episode '${episode.episodeName}' has been successfully deleted from the database.`
        );
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
