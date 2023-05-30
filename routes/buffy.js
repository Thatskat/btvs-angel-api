const express = require("express");
const router = express.Router();
const authUser = require("../middleware/auth");
const apiKey = process.env.ADMIN_API_KEY;

const {
  getAllBuffyEpisodes,
  getBuffyEpisodesBySeason,
  getBuffyEpisode,
  getBuffyEpisodeById,
  postEpisode,
  putBuffyEpisodeById,
  deleteBuffyEpisode
} = require("../controllers/buffyController");

router.get("/", getAllBuffyEpisodes);
router.get("/season/:season", getBuffyEpisodesBySeason);
router.get("/season/:season/:episode", getBuffyEpisode);
router.get("/id=:id", getBuffyEpisodeById);

router.post(`/api_key=${apiKey}`, authUser, postEpisode);

router.put(`/id=:id/api_key=${apiKey}`, authUser, putBuffyEpisodeById);

router.delete(`/id=:id/api_key=${apiKey}`, authUser, deleteBuffyEpisode)

module.exports = router;
