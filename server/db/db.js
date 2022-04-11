const Sequelize = require("sequelize");

const db = new Sequelize(
  "postgresql://postgres:Phyll0ph@ga@localhost:5432/messenger",
  {
    logging: false,
  }
);

const auth = async () => {
  await db.authenticate();
};

auth();

module.exports = db;