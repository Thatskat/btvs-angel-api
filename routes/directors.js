const express = require("express");
const router = express.Router();
const authUser = require("../middleware/auth");
const apiKey = process.env.ADMIN_API_KEY;

const {
  getAllDirectors,
  getActorCrewById,
  postActorCrew,
  putActorCrewById, 
  deleteActorCrew
} = require("../controllers/actorController");

router.get("/", getAllDirectors);
router.get("/id=:id", getActorCrewById);

router.post(`/api_key=${apiKey}`, authUser, postActorCrew);

router.put(`/id=:id/api_key=${apiKey}`, authUser, putActorCrewById);

router.delete(`/id=:id/api_key=${apiKey}`, authUser, deleteActorCrew);

module.exports = router;