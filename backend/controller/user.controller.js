const db = require("../db.js");

class UserController {
  async createUser(req, res) {
    try {
      const { name, lastname, email, phone } = req.body;
      const newPerson = await db.query("CALL create_user($1,$2,$3,$4);", [
        name,
        lastname,
        email,
        phone,
      ]);
      res.json([name, lastname, email, phone]);
    } catch (e) {
      console.log(e);
    }
  }
  async getUser(req, res) {}
}

module.exports = new UserController();
