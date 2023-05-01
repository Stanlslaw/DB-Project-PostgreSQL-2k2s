const db = require("../db.js");

class UserController {
  async regUser(req, res) {
    try {
      const { name, lastname, email, phone, password } = req.body;
      const result = await db.query("select reg_user($1,$2,$3,$4,$5)", [
        name,
        lastname,
        email,
        phone,
        password,
      ]);
      res.json({ result: result.rows[0].reg_user });
    } catch (e) {
      res.json({ result: e });
    }
  }
  async getUser(req, res) {}
}

module.exports = new UserController();
