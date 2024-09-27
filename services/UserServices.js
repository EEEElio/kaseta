const Models = require("../models/sequelize");

class UserServices {
  constructor(sequelize) {
    Models(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async getUsers() {
    return "User services: get user";
  }
}

module.exports = UserServices;
