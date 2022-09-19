"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  discussion.init(
    {
      id_post: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      // id_user: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // id_forum: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // id_subforum: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      title_post: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc_post: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img_post: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "discussions",
      modelName: "Discussion",
    }
  );
  return discussion;
};
