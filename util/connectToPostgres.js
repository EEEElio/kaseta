const Sequelize = require("sequelize");
const config = require("../config")[process.env.NODE_ENV || "development"];

const log = config.log();

module.exports = () => {
  const sequelize = new Sequelize(config.postgres.options);
  sequelize
    .authenticate()
    .then(() => {
      log.info("Connection has been setablished successfully");
    })
    .catch((error) => {
      log.error("Unable to connect to the database:", error);
    });
  return sequelize;
};
