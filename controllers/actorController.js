const { Actor, validate } = require("../models/actorModel");

module.exports = {
  // GET ALL ACTORS
  async getAllActors(req, res) {
    try {
      const actors = await Actor.find({ type: /actor/i });
      if (!actors) {
        return res
          .status(400)
          .send("No actors could be found in the database.");
      }
      res.send(actors);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET ALL DIRECTORS
  async getAllDirectors(req, res){
    try {
      const director = await Actor.find({ type: /director/i });
      if (!director) {
        return res
          .status(400)
          .send("No directors could be found in the database.");
      }
      res.send(director);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET ALL WRITERS
  async getAllWriters(req, res){
    try {
      const writer = await Actor.find({ type: /writer/i });
      if (!writer) {
        return res
          .status(400)
          .send("No writers could be found in the database.");
      }
      res.send(writer);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET ACTOR BY ID
  async getActorCrewById(req, res) {
    try {
      const id = req.params.id;
      const actor = await Actor.findById(id);
      if (!actor) {
        return res
          .status(404)
          .send("The actor with that corresponding ID could not be found.");
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // GET ACTOR BY CHARACTER
  async getActorByCharacter(req, res) {
    try {
      const character = req.params.character;
      const actor = await Actor.find({
        type: /actor/i,
        characterPlayed: character,
      });
      res.send(actor);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // POST AN ACTOR + CREW MEMBER
  async postActorCrew(req, res) {
    try {
      const { error } = validate(req.body);
      if (error) {
        return res
          .status(400)
          .send(
            "All actor and crew member details are required. Error: " +
              error.details[0].message
          );
      }
      let actor = new Actor({
        name: req.body.name,
        bio: req.body.bio,
        characterPlayed: req.body.characterPlayed,
        imdbProfile: req.body.imdbProfile,
        profilePicture: req.body.profilePicture,
        type: req.body.type,
      });
      actor = await actor.save();
      res.send(`${req.body.name} has been successfully added to the Database`);
    } catch (err) {
      console.log(err);
    }
  },
  // PUT - EDIT ACTOR BY ID
  async putActorCrewById(req, res) {
    try {
      const { error } = validate(req.body);
      if (error) {
        return res.status(400).send(error);
      }
      const actor = await Actor.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          bio: req.body.bio,
          characterPlayed: req.body.characterPlayed,
          imdbProfile: req.body.imdbProfile,
          profilePicture: req.body.profilePicture,
          type: req.body.type,
        },
        { new: true }
      );
      if (!actor) {
        return res
          .status(404)
          .send(
            "The actor with that corresponding ID could noy be found. Please try again."
          );
      }
      res
        .status(200)
        .send(`Actor '${req.body}' has been successfully updated. ` + actor);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  // DELETE - DELETE ACTOR BY ID
  async deleteActorCrew(req, res) {
    try {
      const actor = await Actor.findByIdAndRemove(req.params.id);
      if (!actor) {
        return res
          .status(404)
          .send("The actor with that corresponding ID could not be found.");
      }
      res
        .status(200)
        .send(
          `Actor '${actor.name}' has been successfully deleted from the database.`
        );
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
