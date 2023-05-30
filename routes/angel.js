const express = require("express");
const router = express.Router();
const authUser = require("../middleware/auth");
const apiKey = process.env.ADMIN_API_KEY;

const {
  getAllAngelEpisodes,
  getAngelEpisodesBySeason,
  getAngelEpisode,
  getAngelEpisodeById,
  postEpisode,
  putAngelEpisodeById,
  deleteAngelEpisode,
} = require("../controllers/angelController");

router.get("/", getAllAngelEpisodes);
router.get("/season/:season", getAngelEpisodesBySeason);
router.get("/season/:season/:episode", getAngelEpisode);
router.get("/id=:id", getAngelEpisodeById);

router.post(`/api_key=${apiKey}`, authUser, postEpisode);

router.put(`/id=:id/api_key=${apiKey}`, authUser, putAngelEpisodeById);

router.delete(`/id=:id/api_key=${apiKey}`, authUser, deleteAngelEpisode);

module.exports = router;
