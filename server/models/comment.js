"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  comment.init(
    {
      id_comment: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      // id_user: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // id_post: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      user_comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "comments",
      modelName: "Comment",
    }
  );
  return comment;
};
