const Pool = require("pg").Pool;

const pool = new Pool({
  user: "programmer",
  password: "Admin2004",
  host: "postgreubuntu",
  port: "5432",
  database: "shop",
});

module.exports = pool;
