const { Sequelize } = require("@sequelize/core");

const db = new Sequelize(
  "messenger", "postgres", "Phyll0phaga",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

const auth = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

auth();

module.exports = db;
