
module.exports = function authUser(req, res, next) {
  try {
    const adminApiKey = process.env.ADMIN_API_KEY;
    if (!adminApiKey) {
      console.log("ERROR: ADMIN_API_KEY is incorrect");
      process.exit(1);
    }
    next();
  } catch (err) {
    res.status(400).send("Invalid API Key");
  }
};
