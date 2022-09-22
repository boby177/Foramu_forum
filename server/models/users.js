"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
      instanceMethods: {
        generateHash(user_password) {
          return bcrypt.hash(user_password, bcrypt.genSaltSync(8));
        },
        validPassword(user_password) {
          return bcrypt.compare(user_password, this.user_password);
        },
      },
    }
  );
  return users;
};
