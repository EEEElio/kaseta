const { where } = require("sequelize");
const Models = require("../models/sequelize");

class UserServices {
  constructor(sequelize) {
    Models(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async createUser(userInfo) {
    try {
      const user = await this.models.User.create({ ...userInfo });

      return user;
    } catch (err) {
      return err;
    }
  }
  async getUser(id) {
    try {
      const user = this.models.User.findOne({ where: { id: id } });
      return user;
    } catch (er) {
      return err;
    }
  }
  async getAllUsers() {
    try {
      const users = this.models.User.findAll();
      return users;
    } catch (er) {
      return err;
    }
  }

  async getAllUsersAttributes() {
    try {
      const users = this.models.User.findAll({
        attributes: ["firstName", "lastName"],
      });
      return users;
    } catch (er) {
      return err;
    }
  }

  async updateUser(updateInfo) {
    try {
      await this.models.User.update(
        { ...updateInfo.updateInfo },
        { where: { id: updateInfo.id } }
      );
      return "User updated";
    } catch (err) {
      return err;
    }
  }

  async deleteUser(id) {
    try {
      await this.models.User.destroy({ where: { id: id } });
      return "User Deleted";
    } catch (err) {
      return err;
    }
  }
}

module.exports = UserServices;
